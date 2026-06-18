import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./Form.css";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const FrogIcons = {
  user: (
    <svg viewBox="0 0 24 24" className="frog__icon">
      <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-4.4 0-8 2.2-8 5v3h16v-3c0-2.8-3.6-5-8-5z" fill="currentColor"/>
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" className="frog__icon">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" fill="currentColor"/>
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" className="frog__icon">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm3.5-9c0 1.9-1.6 3.5-3.5 3.5S8.5 12.9 8.5 11 10.1 7.5 12 7.5s3.5 1.6 3.5 3.5z" fill="currentColor"/>
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" className="frog__icon">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" className="frog__icon">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="currentColor"/>
    </svg>
  ),
  upload: (
    <svg viewBox="0 0 24 24" className="frog__icon-upload">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
    </svg>
  ),
};

const MONTHS = [
  "Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec",
  "Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"
];

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: 60 }, (_, i) => currentYear - 16 - i);
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);

function isValidDate(day, month, year) {
  if (!day || !month || !year) return false;
  const d = new Date(year, month - 1, day);
  return (
    d.getFullYear() === Number(year) &&
    d.getMonth() === Number(month) - 1 &&
    d.getDate() === Number(day)
  );
}

function validate(form, phone, file) {
  const errors = {};
  const nameRegex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]+$/;

  if (!form.firstName?.trim())
    errors.firstName = "Imię jest wymagane";
  else if (!nameRegex.test(form.firstName))
    errors.firstName = "Imię może zawierać tylko litery";

  if (!form.lastName?.trim())
    errors.lastName = "Nazwisko jest wymagane";
  else if (!nameRegex.test(form.lastName))
    errors.lastName = "Nazwisko może zawierać tylko litery";

  if (!form.birthDay || !form.birthMonth || !form.birthYear)
    errors.birthDate = "Podaj pełną datę urodzenia";
  else if (!isValidDate(form.birthDay, form.birthMonth, form.birthYear))
    errors.birthDate = "Podana data nie istnieje";

  if (!form.city?.trim())
    errors.city = "Podaj miejscowość";

  if (!form.email?.trim())
    errors.email = "Adres e-mail jest wymagany";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Podaj prawidłowy adres e-mail";

  const digitsOnly = phone.replace(/\s/g, "");
  if (!digitsOnly)
    errors.phone = "Numer telefonu jest wymagany";
  else if (!/^\d{6,15}$/.test(digitsOnly))
    errors.phone = "Podaj prawidłowy numer (6–15 cyfr)";

  if (!file)
    errors.file = "CV jest wymagane";

  return errors;
}

export default function Form() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    city: "",
    email: "",
  });

  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (["birthDay", "birthMonth", "birthYear"].includes(name))
      setErrors((prev) => ({ ...prev, birthDate: undefined }));
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/[^\d\s]/g, "");
    setPhone(val);
    setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!validTypes.includes(selectedFile.type)) {
      setStatus("Zaakceptowane formaty: PDF, DOC, DOCX");
      setStatusType("error");
      return;
    }
    if (selectedFile.size > 5 * 1024 * 1024) {
      setStatus("Plik jest za duży. Maksymalny rozmiar to 5MB.");
      setStatusType("error");
      return;
    }
    setFile(selectedFile);
    setErrors((prev) => ({ ...prev, file: undefined }));
    setStatus("");
  };

  const handleFileClick = () => fileInputRef.current?.click();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(form, phone, file);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      const fileName = `${Date.now()}_${form.lastName}_${form.firstName}_${file.name}`;
      const res = await fetch(
        `${SUPABASE_URL}/storage/v1/object/cv/${fileName}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            "Content-Type": file.type,
          },
          body: file,
        }
      );

      if (!res.ok) throw new Error("SERVER_ERROR");

      const cvUrl = `${SUPABASE_URL}/storage/v1/object/public/cv/${fileName}`;
      const birthDate = `${form.birthDay} ${MONTHS[parseInt(form.birthMonth) - 1]} ${form.birthYear}`;

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          firstName: form.firstName,
          lastName: form.lastName,
          birthDate,
          city: form.city,
          email: form.email,
          phone: phone.trim(),
          cv_url: cvUrl,
        }
      );

      setStatus("✓ Aplikacja wysłana pomyślnie!");
      setStatusType("success");
      setForm({
        firstName: "",
        lastName: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        city: "",
        email: "",
      });
      setPhone("");
      setFile(null);

    } catch (err) {
      console.error("BŁĄD:", err);
      setStatus("Błąd po stronie serwera. Spróbuj ponownie później.");
      setStatusType("error");
    }

    setLoading(false);
  };

  return (
    <div className="frog__wrapper">
      <form className="frog__form" onSubmit={handleSubmit}>
        <div className="frog__header">
          <h1 className="frog__title">Dołącz do naszego zespołu</h1>
        </div>

        <div className="frog__row">
          <div className="frog__field">
            <label className="frog__label">
              {FrogIcons.user}
              Imię
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Wpisz swoje imię"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <span className="frog__error">{errors.firstName}</span>}
          </div>
          <div className="frog__field">
            <label className="frog__label">
              {FrogIcons.user}
              Nazwisko
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Wpisz swoje nazwisko"
              value={form.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && <span className="frog__error">{errors.lastName}</span>}
          </div>
        </div>

        <div className="frog__field">
          <label className="frog__label">
            {FrogIcons.calendar}
            Data urodzenia
          </label>
          <div className="frog__date">
            <select name="birthDay" value={form.birthDay} onChange={handleChange} required>
              <option value="">Dzień</option>
              {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select name="birthMonth" value={form.birthMonth} onChange={handleChange} required>
              <option value="">Miesiąc</option>
              {MONTHS.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
            </select>
            <select name="birthYear" value={form.birthYear} onChange={handleChange} required>
              <option value="">Rok</option>
              {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
          {errors.birthDate && <span className="frog__error">{errors.birthDate}</span>}
        </div>

        <div className="frog__field">
          <label className="frog__label">
            {FrogIcons.location}
            Miejscowość
          </label>
          <input
            type="text"
            name="city"
            placeholder="Wpisz miejscowość"
            value={form.city}
            onChange={handleChange}
            required
          />
          {errors.city && <span className="frog__error">{errors.city}</span>}
        </div>

        <div className="frog__field">
          <label className="frog__label">
            {FrogIcons.mail}
            Adres e-mail
          </label>
          <input
            type="email"
            name="email"
            placeholder="Wpisz swój adres e-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="frog__error">{errors.email}</span>}
        </div>

        <div className="frog__field">
          <label className="frog__label">
            {FrogIcons.phone}
            Numer telefonu
          </label>
          <input
            type="tel"
            placeholder="123 456 789"
            value={phone}
            onChange={handlePhoneChange}
            maxLength={18}
            required
          />
          {errors.phone && <span className="frog__error">{errors.phone}</span>}
        </div>

        <div className="frog__field">
          <label className="frog__label">CV</label>
          <div className="frog__upload" onClick={handleFileClick}>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <div className="frog__upload-inner">
              <div className="frog__upload-icon">{FrogIcons.upload}</div>
              <p className="frog__upload-title">Przeciągnij i upuść plik tutaj</p>
              <p className="frog__upload-sub">lub</p>
              <button type="button" className="frog__upload-btn">Wybierz plik</button>
            </div>
            {file && <p className="frog__upload-selected">✓ {file.name}</p>}
          </div>
          <p className="frog__upload-hint">Akceptowane formaty: PDF, DOC, DOCX. Maksymalnie 5MB.</p>
          {errors.file && <span className="frog__error">{errors.file}</span>}
        </div>

        <label className="frog__checkbox">
          <input type="checkbox" required />
          <span>
            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{" "}
            <button
              type="button"
              className="frog__policy-btn"
              onClick={() => navigate("/privacy")}
            >
              Polityką prywatności
            </button>.
          </span>
        </label>

        <button type="submit" className="frog__submit" disabled={loading}>
          {loading ? "Wysyłanie..." : "Wyślij aplikację"}
        </button>

        {status && (
          <div className={`frog__status frog__status--${statusType}`}>{status}</div>
        )}
      </form>
    </div>
  );
}