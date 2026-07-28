import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordRules = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /\d/.test(formData.password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
  };

  const isPasswordValid =
    passwordRules.length &&
    passwordRules.uppercase &&
    passwordRules.lowercase &&
    passwordRules.number &&
    passwordRules.special;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPasswordValid) {
      alert(
        "Password must be at least 8 characters long and contain uppercase, lowercase, number and special character."
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const { data } = await API.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      login(data.user, data.token);

      alert("Registration Successful!");

      navigate("/dashboard");
    } catch (error) {
  console.log(error);
  console.log(error.response);
  console.log(error.response?.data);

  alert(error.response?.data?.message || "Registration Failed");
} finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-4 transition-all duration-300">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-xl"
      >
        <h1 className="mb-8 text-center text-4xl font-bold text-[var(--text)]">
          Create Account
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mb-4 w-full rounded-lg border border-[var(--border)] bg-transparent p-3 text-[var(--text)] placeholder:text-[var(--subtext)] focus:border-indigo-500 focus:outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="mb-4 w-full rounded-lg border border-[var(--border)] bg-transparent p-3 text-[var(--text)] placeholder:text-[var(--subtext)] focus:border-indigo-500 focus:outline-none"
        />

        <div className="relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[var(--border)] bg-transparent p-3 pr-12 text-[var(--text)] placeholder:text-[var(--subtext)] focus:border-indigo-500 focus:outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--subtext)] hover:text-indigo-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="mb-5 rounded-lg bg-[var(--bg)] p-3 text-sm">
          <p className={passwordRules.length ? "text-green-500" : "text-red-500"}>
            {passwordRules.length ? "✔" : "✖"} At least 8 characters
          </p>

          <p className={passwordRules.uppercase ? "text-green-500" : "text-red-500"}>
            {passwordRules.uppercase ? "✔" : "✖"} One uppercase letter
          </p>

          <p className={passwordRules.lowercase ? "text-green-500" : "text-red-500"}>
            {passwordRules.lowercase ? "✔" : "✖"} One lowercase letter
          </p>

          <p className={passwordRules.number ? "text-green-500" : "text-red-500"}>
            {passwordRules.number ? "✔" : "✖"} One number
          </p>

          <p className={passwordRules.special ? "text-green-500" : "text-red-500"}>
            {passwordRules.special ? "✔" : "✖"} One special character
          </p>
        </div>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-[var(--border)] bg-transparent p-3 pr-12 text-[var(--text)] placeholder:text-[var(--subtext)] focus:border-indigo-500 focus:outline-none"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--subtext)] hover:text-indigo-600"
          >
            {showConfirmPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>

        {formData.confirmPassword && (
          <p
            className={`mt-2 text-sm ${
              formData.password === formData.confirmPassword
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {formData.password === formData.confirmPassword
              ? "✔ Passwords match"
              : "✖ Passwords do not match"}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating Account..." : "Register"}
        </button>

        <p className="mt-6 text-center text-[var(--subtext)]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;