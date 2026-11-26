import { useRef } from "react";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Globe2,
  Mic2,
  Network,
  Sparkles,
} from "lucide-react";

import { Container } from "../../../shared/ui/container";
import {
  contactInquirySchema,
  type ContactInquiryInput,
} from "../schemas/contact.schema";
import { useSubmitContactInquiry } from "../hooks/useSubmitContactInquiry";
import { useContactPageAnimations } from "../hooks/useContactPageAnimations";

const defaultValues: ContactInquiryInput = {
  name: "",
  email: "",
  organisation: "",
  eventName: "",
  eventType: "General enquiry",
  eventDate: "",
  location: "",
  message: "",
};

const pathways = [
  {
    number: "01",
    title: "Speaking engagements",
    description:
      "Keynotes, conferences and conversations that challenge the room.",
    type: "Keynote speaking" as const,
    icon: Mic2,
  },
  {
    number: "02",
    title: "Corporate events",
    description:
      "Leadership sessions, business gatherings and organisational events.",
    type: "Corporate event" as const,
    icon: Globe2,
  },
  {
    number: "03",
    title: "Strategic partnerships",
    description:
      "Meaningful collaborations, initiatives and opportunities to build.",
    type: "Strategic partnership" as const,
    icon: Network,
  },
  {
    number: "04",
    title: "Something else?",
    description:
      "Have a different idea or question? Start the conversation here.",
    type: "General enquiry" as const,
    icon: Sparkles,
  },
];

const inputClass =
  "w-full border-0 border-b border-[#111111]/20 bg-transparent px-0 py-4 text-sm text-[#111111] outline-none transition-colors placeholder:text-[#77736C]/65 focus:border-[#A17A2F]";

const labelClass =
  "mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#77736C]";

const errorClass = "mt-2 text-xs text-red-700";

export function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  const mutation = useSubmitContactInquiry();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactInquiryInput>({
    resolver: zodResolver(contactInquirySchema),
    defaultValues,
  });

  useContactPageAnimations(pageRef);

  const selectedType = useWatch({ control, name: "eventType" });

  const handlePathwaySelect = (
    type: ContactInquiryInput["eventType"],
  ) => {
    setValue("eventType", type, {
      shouldDirty: true,
      shouldValidate: true,
    });

    document.getElementById("booking-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const onSubmit = async (values: ContactInquiryInput) => {
    mutation.reset();

    try {
      await mutation.mutateAsync(values);
      reset(defaultValues);
    } catch {
      // The mutation state displays the submission error.
    }
  };

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-[#F5F2EB] text-[#111111]"
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#111111] pb-24 pt-36 text-[#F5F2EB] md:pb-36 md:pt-48">
        <Container size="wide">
          <div className="mb-16 flex flex-wrap items-center justify-between gap-4">
            <p
              data-contact-index
              className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D6A84B]"
            >
              CONTACT / BEGIN HERE
            </p>

            <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
              OPEN TO SELECT ENGAGEMENTS
            </p>
          </div>

          <div className="relative grid gap-14 lg:grid-cols-12 lg:items-end">
            <div className="relative z-10 lg:col-span-9">
              <p className="mb-7 text-[10px] uppercase tracking-[0.24em] text-white/45">
                GOOD THINGS START WITH A CONVERSATION
              </p>

              <h1 className="font-['Space_Grotesk'] text-[clamp(2.7rem,8vw,8.5rem)] font-medium leading-[0.94] tracking-[-0.085em]">
                <span className="block overflow-hidden pb-[0.12em]">
                  <span
                    className="block"
                    data-contact-hero-line
                  >
                    LET'S START
                  </span>
                </span>

                <span className="block overflow-hidden pb-[0.12em]">
                  <span
                    className="block text-[#D6A84B]"
                    data-contact-hero-line
                  >
                    A BETTER
                  </span>
                </span>

                <span className="block overflow-hidden pb-[0.12em]">
                  <span
                    className="block"
                    data-contact-hero-line
                  >
                    CONVERSATION.
                  </span>
                </span>
              </h1>
            </div>

            <div
              className="relative z-10 lg:col-span-3 lg:pb-3"
              data-contact-hero-copy
            >
              <span className="mb-6 block h-px w-12 bg-[#D6A84B]" />

              <p className="max-w-sm text-base leading-relaxed text-white/65 md:text-lg">
                Every meaningful collaboration begins somewhere. Tell us what
                you're thinking, what you're building, or what you'd like to
                make happen.
              </p>

              <a
                href="#enquiries"
                className="mt-9 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D6A84B] transition-colors hover:text-white"
              >
                Find your starting point
                <ArrowDownRight size={16} />
              </a>
            </div>

            <div
              data-contact-orbit
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-0 hidden h-64 w-64 rounded-full border border-[#D6A84B]/20 lg:block"
            >
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6A84B]" />
              <div className="absolute inset-8 rounded-full border border-dashed border-white/15" />
              <div className="absolute inset-16 rounded-full border border-[#D6A84B]/20" />
            </div>
          </div>

          <div className="mt-24 flex items-center justify-between border-t border-white/15 pt-6 md:mt-32">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
              DAVID CHEKWAS
            </span>

            <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6A84B]" />
              BASED IN AFRICA · SPEAKING GLOBALLY
            </span>
          </div>
        </Container>
      </section>

      {/* ENQUIRY PATHWAYS */}
      <section
        id="enquiries"
        className="py-24 md:py-36"
      >
        <Container size="wide">
          <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A17A2F]">
                FIRST, WHAT'S ON YOUR MIND?
              </p>

              <h2 className="max-w-3xl font-['Space_Grotesk'] text-5xl font-medium leading-[0.9] tracking-[-0.075em] md:text-7xl">
                Every great idea
                <br />
                has a starting point.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-[#77736C] md:col-span-5 md:ml-auto md:text-right">
              Choose the conversation that best describes what you have in
              mind. We'll take it from there.
            </p>
          </div>

          <div className="border-t border-[#111111]/20">
            {pathways.map((pathway) => {
              const Icon = pathway.icon;
              const isSelected = selectedType === pathway.type;

              return (
                <button
                  key={pathway.number}
                  type="button"
                  data-contact-pathway
                  aria-pressed={isSelected}
                  onClick={() => handlePathwaySelect(pathway.type)}
                  className={`group grid w-full gap-5 border-b border-[#111111]/20 py-8 text-left transition-colors duration-300 md:grid-cols-12 md:items-center md:gap-8 md:px-5 ${
                    isSelected
                      ? "bg-[#111111] px-5 text-[#F5F2EB]"
                      : "hover:bg-[#111111]/[0.035]"
                  }`}
                >
                  <div className="flex items-center gap-4 md:col-span-2">
                    <span
                      className={`font-['Space_Grotesk'] text-xl ${
                        isSelected ? "text-[#D6A84B]" : "text-[#A17A2F]"
                      }`}
                    >
                      {pathway.number}
                    </span>

                    <Icon
                      size={19}
                      className={
                        isSelected
                          ? "text-[#D6A84B]"
                          : "text-[#77736C]"
                      }
                    />
                  </div>

                  <div className="md:col-span-5">
                    <h3 className="font-['Space_Grotesk'] text-2xl font-medium tracking-[-0.05em] md:text-4xl">
                      {pathway.title}
                    </h3>
                  </div>

                  <p
                    className={`max-w-sm text-sm leading-relaxed md:col-span-4 ${
                      isSelected ? "text-white/55" : "text-[#77736C]"
                    }`}
                  >
                    {pathway.description}
                  </p>

                  <div className="flex justify-end md:col-span-1">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                        isSelected
                          ? "border-[#D6A84B] bg-[#D6A84B] text-[#111111]"
                          : "border-[#111111]/20 text-[#111111] group-hover:border-[#111111] group-hover:bg-[#111111] group-hover:text-white"
                      }`}
                    >
                      {isSelected ? (
                        <Check size={17} />
                      ) : (
                        <ArrowUpRight size={18} />
                      )}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* BOOKING FORM */}
      <section
        id="booking-form"
        className="scroll-mt-8 bg-[#EAE6DC] py-24 md:py-36"
      >
        <Container size="wide">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div
              className="lg:sticky lg:top-32 lg:col-span-4 lg:h-fit"
              data-contact-form-intro
            >
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A17A2F]">
                THE DETAILS
              </p>

              <h2 className="font-['Space_Grotesk'] text-5xl font-medium leading-[0.9] tracking-[-0.075em] md:text-7xl">
                TELL US
                <br />
                WHAT YOU
                <br />
                <span className="text-[#A17A2F]">HAVE IN MIND.</span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-relaxed text-[#77736C]">
                A little context helps us understand the opportunity and
                respond with the right next steps.
              </p>

              <div className="mt-12 border-t border-[#111111]/20 pt-6">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#77736C]">
                  YOUR ENQUIRY TYPE
                </p>

                <p className="mt-3 font-['Space_Grotesk'] text-xl font-medium">
                  {selectedType}
                </p>

                <div className="mt-6 flex items-center gap-3 text-[9px] uppercase tracking-[0.16em] text-[#77736C]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A17A2F]" />
                  All fields are required
                </div>
              </div>
            </div>

            <div
              data-contact-form-panel
              className="bg-[#F5F2EB] p-6 md:p-12 lg:col-span-8"
            >
              <div className="mb-12 flex items-start justify-between gap-5 border-b border-[#111111]/15 pb-7">
                <div>
                  <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-[#A17A2F]">
                    BOOKING / ENQUIRY FORM
                  </p>

                  <h3 className="font-['Space_Grotesk'] text-3xl font-medium tracking-[-0.055em] md:text-4xl">
                    Let's make it happen.
                  </h3>
                </div>

                <span className="font-['Space_Grotesk'] text-3xl text-[#D6A84B]">
                  01
                </span>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                onChange={() => {
                  if (mutation.isSuccess || mutation.isError) {
                    mutation.reset();
                  }
                }}
                noValidate
              >
                <div className="grid gap-x-10 gap-y-9 md:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>
                      Full name *
                    </label>
                    <input
                      id="contact-name"
                      autoComplete="name"
                      placeholder="Your name"
                      className={inputClass}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={
                        errors.name ? "contact-name-error" : undefined
                      }
                      {...register("name")}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className={errorClass}>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className={labelClass}>
                      Email address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={inputClass}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                      {...register("email")}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className={errorClass}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-organisation" className={labelClass}>
                      Organisation *
                    </label>
                    <input
                      id="contact-organisation"
                      autoComplete="organization"
                      placeholder="Company or organisation"
                      className={inputClass}
                      aria-invalid={Boolean(errors.organisation)}
                      aria-describedby={
                        errors.organisation
                          ? "contact-organisation-error"
                          : undefined
                      }
                      {...register("organisation")}
                    />
                    {errors.organisation && (
                      <p
                        id="contact-organisation-error"
                        className={errorClass}
                      >
                        {errors.organisation.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-event-name" className={labelClass}>
                      Event / project name *
                    </label>
                    <input
                      id="contact-event-name"
                      placeholder="What are you planning?"
                      className={inputClass}
                      aria-invalid={Boolean(errors.eventName)}
                      aria-describedby={
                        errors.eventName
                          ? "contact-event-name-error"
                          : undefined
                      }
                      {...register("eventName")}
                    />
                    {errors.eventName && (
                      <p id="contact-event-name-error" className={errorClass}>
                        {errors.eventName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-event-type" className={labelClass}>
                      Enquiry type *
                    </label>
                    <select
                      id="contact-event-type"
                      className={inputClass}
                      {...register("eventType")}
                    >
                      <option value="Keynote speaking">
                        Keynote speaking
                      </option>
                      <option value="Corporate event">
                        Corporate event
                      </option>
                      <option value="Strategic partnership">
                        Strategic partnership
                      </option>
                      <option value="General enquiry">
                        General enquiry
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-event-date" className={labelClass}>
                      Event date *
                    </label>
                    <input
                      id="contact-event-date"
                      type="date"
                      className={inputClass}
                      aria-invalid={Boolean(errors.eventDate)}
                      aria-describedby={
                        errors.eventDate
                          ? "contact-event-date-error"
                          : undefined
                      }
                      {...register("eventDate")}
                    />
                    {errors.eventDate && (
                      <p id="contact-event-date-error" className={errorClass}>
                        {errors.eventDate.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="contact-location" className={labelClass}>
                      Event location *
                    </label>
                    <input
                      id="contact-location"
                      placeholder="City, country or virtual"
                      className={inputClass}
                      aria-invalid={Boolean(errors.location)}
                      aria-describedby={
                        errors.location
                          ? "contact-location-error"
                          : undefined
                      }
                      {...register("location")}
                    />
                    {errors.location && (
                      <p id="contact-location-error" className={errorClass}>
                        {errors.location.message}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="contact-message" className={labelClass}>
                      Tell us more *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Share the details, your expectations, and anything else we should know..."
                      className={`${inputClass} resize-y`}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? "contact-message-error" : undefined
                      }
                      {...register("message")}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className={errorClass}>
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                {mutation.isSuccess && (
                  <div
                    role="status"
                    className="mt-9 border border-[#A17A2F]/40 bg-[#D6A84B]/10 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <Check
                        size={19}
                        className="mt-0.5 shrink-0 text-[#8A6727]"
                      />
                      <div>
                        <p className="font-['Space_Grotesk'] text-lg font-medium">
                          Your enquiry has been received.
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-[#77736C]">
                          Thank you for reaching out. Your submission has been
                          saved in this demo experience.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {mutation.isError && (
                  <p role="alert" className="mt-6 text-sm text-red-700">
                    Something went wrong while saving your enquiry. Please try
                    again.
                  </p>
                )}

                <div className="mt-12 flex flex-col gap-5 border-t border-[#111111]/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-[10px] leading-relaxed text-[#77736C]">
                    By submitting, you're sharing your details for the purpose
                    of responding to this enquiry.
                  </p>

                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="site-button inline-flex min-h-14 items-center justify-center gap-5 bg-[#111111] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#A17A2F] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {mutation.isPending ? "Sending enquiry..." : "Send enquiry"}
                    <ArrowUpRight size={17} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* CLOSING STATEMENT */}
      <section
        className="relative overflow-hidden bg-[#D6A84B] py-24 md:py-32"
        data-contact-footer
      >
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#111111]/60">
                THE NEXT MOVE STARTS HERE
              </p>

              <h2 className="font-['Space_Grotesk'] text-5xl font-medium leading-[0.86] tracking-[-0.08em] md:text-[7rem]">
                THINK BIGGER.
                <br />
                START HERE.
              </h2>
            </div>

            <div className="md:col-span-4 md:pb-2">
              <p className="mb-7 max-w-sm text-sm leading-relaxed text-[#111111]/70">
                The right conversation can open up an entirely different
                possibility. Let's find out where this one leads.
              </p>

              <Link
                to="/"
                className="site-button inline-flex items-center gap-4 border border-[#111111] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.17em] transition-colors duration-300 hover:bg-[#111111] hover:text-white"
              >
                Back to the beginning
                <ArrowDown size={16} />
              </Link>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[#111111]/25 pt-6">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#111111]/60">
              DAVID CHEKWAS
            </span>

            <span className="text-[9px] uppercase tracking-[0.2em] text-[#111111]/60">
              THINK BIGGER. LEAD DIFFERENTLY. BUILD WHAT MATTERS.
            </span>
          </div>
        </Container>
      </section>
    </main>
  );
}
