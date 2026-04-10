import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import ThemeToggle from "@/components/mindroot/ThemeToggle";
import { Printer, Calendar, Brain, Shield } from "lucide-react";

const MindPrintPage = () => {
  const { user, loading, signUp, signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) navigate("/dashboard");
  }, [user, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      if (mode === "signup") {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
    } catch (err: any) {
      const code = err?.code || "";
      if (code === "auth/email-already-in-use") setError("Account already exists. Sign in instead.");
      else if (code === "auth/wrong-password" || code === "auth/invalid-credential") setError("Invalid email or password.");
      else if (code === "auth/weak-password") setError("Password must be at least 6 characters.");
      else setError("Something went wrong. Try again.");
    }
    setSubmitting(false);
  };

  const handleGoogle = async () => {
    setError("");
    try {
      await signInWithGoogle();
    } catch {
      setError("Google sign-in failed. Try again.");
    }
  };

  const features = [
    { icon: Printer, title: "Printed daily page", desc: "A physical page arrives at your printer each morning. No screen required." },
    { icon: Calendar, title: "Calendar aware", desc: "Your schedule, pulled from Google Calendar, woven into your daily layout." },
    { icon: Brain, title: "AI composed, not retained", desc: "An open-source model composes your page. Nothing is stored. Stateless by design." },
    { icon: Shield, title: "Memory sovereign", desc: "Your data stays yours. No training. No profiling. No extraction." },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <ThemeToggle />

      {/* Nav */}
      <header className="px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="/" className="font-display text-xl text-foreground hover:opacity-80 transition-opacity">
            Mindroot
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left: pitch */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Free service from Mindroot Foundation
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-foreground font-light leading-tight mb-6">
              MindPrint
            </h1>
            <p className="font-body text-lg text-muted-foreground font-light leading-relaxed mb-8">
              Even in a digital world, tangible things provide grounding.
              A single printed page, composed fresh each morning, with your schedule,
              your focus, and nothing else.
            </p>
            <p className="font-body text-sm text-muted-foreground font-light leading-relaxed mb-12">
              No app to open. No screen to check. Just a page on your desk
              that knows what your day looks like.
            </p>

            <div className="space-y-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <f.icon size={20} className="text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-body text-sm text-foreground font-medium mb-1">{f.title}</h3>
                    <p className="font-body text-xs text-muted-foreground font-light leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: auth form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-secondary/50 border border-border rounded-sm p-8 md:p-10"
          >
            <h2 className="font-display text-2xl text-foreground mb-2">
              {mode === "signup" ? "Get started" : "Welcome back"}
            </h2>
            <p className="font-body text-xs text-muted-foreground mb-8">
              {mode === "signup" ? "Create your free account." : "Sign in to your account."}
            </p>

            {/* Google */}
            <button
              onClick={handleGoogle}
              className="w-full flex items-center justify-center gap-3 border border-border bg-transparent text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-body text-sm py-3 mb-6"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 border-t border-border" />
              <span className="font-body text-xs text-muted-foreground">or</span>
              <div className="flex-1 border-t border-border" />
            </div>

            {/* Email form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />
              <input
                type="password"
                placeholder="Password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
              />

              {error && (
                <p className="font-body text-xs text-red-400">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-all duration-300 tracking-widest uppercase text-xs font-body py-3 disabled:opacity-50"
              >
                {submitting ? "..." : mode === "signup" ? "Create Account" : "Sign In"}
              </button>
            </form>

            <p className="font-body text-xs text-muted-foreground mt-6 text-center">
              {mode === "signup" ? (
                <>Already have an account?{" "}
                  <button onClick={() => { setMode("signin"); setError(""); }} className="text-foreground underline">Sign in</button>
                </>
              ) : (
                <>Need an account?{" "}
                  <button onClick={() => { setMode("signup"); setError(""); }} className="text-foreground underline">Sign up</button>
                </>
              )}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MindPrintPage;
