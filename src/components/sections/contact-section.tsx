"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Mail, Send, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type ContactFormValues } from "@/lib/contact";
import { profile, socialLinks } from "@/data/profile";

type SubmitState = {
  type: "idle" | "success" | "error";
  message: string;
};

export function ContactSection() {
  const [submitState, setSubmitState] = useState<SubmitState>({
    type: "idle",
    message: "",
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });


  const handleClick = async (name: string) => { try { await fetch("/api/click-log", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify({ action: name, }), keepalive: true, }); } catch (error) { console.error(error); } };

  async function onSubmit(values: ContactFormValues) {
    setSubmitState({ type: "idle", message: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as {
        message?: string;
        directEmail?: string;
      };

      if (!response.ok) {
        setSubmitState({
          type: "error",
          message: data.message
            ? `${data.message}${data.directEmail ? ` Direct email: ${data.directEmail}` : ""}`
            : "Something went wrong.",
        });
        return;
      }

      reset();
      setSubmitState({
        type: data.directEmail ? "error" : "success",
        message: data.directEmail
          ? `${data.message || "Email delivery is not configured yet."} Direct email: ${data.directEmail}`
          : data.message || "Message sent successfully.",
      });
    } catch {
      setSubmitState({
        type: "error",
        message: `Could not reach the email service. Direct email: ${profile.email}`,
      });
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Have a backend role, product problem, or platform idea?"
            description="Lets Connect!"
            className="mb-8"
          />
          <div className="grid gap-3">
            <a
              href={`mailto:${profile.email}`}
              onClick={() => handleClick("Contact - Email")}
              className="glass-card flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-1"
            >
              <Mail className="size-5 text-sky-200" />
              <span>{profile.email}</span>
            </a>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  onClick={() => handleClick(`Contact - ${link.label}`)}
                  className="glass-card flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-1"
                >
                  <Icon className="size-5 text-violet-200" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* <form onSubmit={handleSubmit(onSubmit)} className="glass-card rounded-[2rem] p-5 sm:p-6">
          <div className="mb-6 flex items-center gap-3 rounded-2xl border border-emerald-300/15 bg-emerald-300/8 p-4 text-sm text-emerald-100">
            <ShieldCheck className="size-5" />
            Form data is validated before delivery.
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="name">Name</label>
              <Input id="name" aria-invalid={Boolean(errors.name)} placeholder="Your name" {...register("name")} />
              {errors.name ? <p className="mt-2 text-sm text-rose-300">{errors.name.message}</p> : null}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium" htmlFor="email">Email</label>
              <Input id="email" aria-invalid={Boolean(errors.email)} placeholder="you@company.com" {...register("email")} />
              {errors.email ? <p className="mt-2 text-sm text-rose-300">{errors.email.message}</p> : null}
            </div>
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium" htmlFor="company">Company</label>
            <Input id="company" placeholder="Company or team" {...register("company")} />
            {errors.company ? <p className="mt-2 text-sm text-rose-300">{errors.company.message}</p> : null}
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium" htmlFor="message">Message</label>
            <Textarea id="message" aria-invalid={Boolean(errors.message)} placeholder="Tell me about the role, project, or opportunity..." {...register("message")} />
            {errors.message ? <p className="mt-2 text-sm text-rose-300">{errors.message.message}</p> : null}
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit" variant="glow" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send message"}
              <Send className="size-4" />
            </Button>
            {submitState.type !== "idle" ? (
              <p className={`text-sm ${submitState.type === "success" ? "text-emerald-300" : "text-rose-300"}`}>
                {submitState.type === "success" ? <CheckCircle2 className="mr-2 inline size-4" /> : null}
                {submitState.message}
              </p>
            ) : null}
          </div>
        </form> */}
      </div>
    </section>
  );
}
