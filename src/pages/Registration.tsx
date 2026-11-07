import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { indianStates, indianStatesAndCities } from "@/data/indiaData";
import { Check, ChevronsUpDown, Loader2, Upload, Swords, Trophy, Clock, CheckCircle2, ShieldCheck, Sparkles, FileText, Download, ExternalLink, AlertCircle } from "lucide-react";
import paymentQR from "@/assets/vigyan-qr.png";

export type TrackType = "round1" | "round2" | "roborugby";

const formSchema = z.object({
  track: z.enum(["round1", "round2", "roborugby"]),
  category: z.enum(["Junior", "Senior"]).optional(),
  event: z.string().optional(),
  uniqueTeamId: z.string().optional(),
  selectionProof: z.instanceof(File).optional(),
  teamName: z.string().min(2, "Team name must be at least 2 characters").max(100, "Team name must be less than 100 characters"),
  state: z.string().min(1, "Please select a state"),
  city: z.string().min(1, "Please select a city"),
  schoolName: z.string().min(2, "School name must be at least 2 characters").max(200, "School name must be less than 200 characters"),
  schoolAddress: z.string().min(5, "School address must be at least 5 characters").max(500, "School address must be less than 500 characters"),
  class: z.string().min(1, "Please enter the class").max(50, "Class must be less than 50 characters"),
  teamLeaderName: z.string().min(2, "Team leader name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  member1: z.string().optional(),
  member2: z.string().optional(),
  member3: z.string().optional(),
  studentContact: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  studentEmail: z.string().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  mentorName: z.string().optional(),
  mentorContact: z.string().optional(),
  mentorEmail: z.string().optional(),
  projectName: z.string().optional(),
  aboutProject: z.string().optional(),
  scalability: z.string().optional(),
  projectImage: z.instanceof(File).optional(),
  paymentScreenshot: z.instanceof(File, { message: "Please upload payment screenshot" }),
  hasCurriculum: z.enum(["Yes", "No"]).optional(),
}).superRefine((data, ctx) => {
  // Track 1 (Round 1):
  if (data.track === "round1") {
    if (!data.category) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please select a category", path: ["category"] });
    }
    if (!data.event) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please select an event", path: ["event"] });
    }
    if (!data.projectName || data.projectName.trim().length < 2) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Project name must be at least 2 characters", path: ["projectName"] });
    }
    if (!data.aboutProject || data.aboutProject.trim().length < 10) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please describe the problem your project is solving (at least 10 characters)", path: ["aboutProject"] });
    }
    if (data.category === "Senior" && (!data.scalability || data.scalability.trim().length < 5)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please explain your scalability / market plan", path: ["scalability"] });
    }
    if (!data.projectImage) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please upload project photo or AI-generated image", path: ["projectImage"] });
    }
    if (!data.hasCurriculum) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please select an option", path: ["hasCurriculum"] });
    }
  }

  // Track 2 (Round 2 Shortlisted):
  if (data.track === "round2") {
    if (!data.uniqueTeamId || data.uniqueTeamId.trim().length < 2) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Unique Team ID from Round 1 is required", path: ["uniqueTeamId"] });
    }
    if (!data.selectionProof) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please upload screenshot of R1 selection email/SMS", path: ["selectionProof"] });
    }
    if (!data.category) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please select your category", path: ["category"] });
    }
    if (!data.event) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please select your event", path: ["event"] });
    }
    if (!data.projectName || data.projectName.trim().length < 2) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Project name is required", path: ["projectName"] });
    }
    if (!data.projectImage) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please upload photo of physical working prototype", path: ["projectImage"] });
    }
    // Mentor details required for Round 2:
    if (!data.mentorName || data.mentorName.trim().length < 2) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Mentor name is required for Round 2", path: ["mentorName"] });
    }
    if (!data.mentorContact || !/^[6-9]\d{9}$/.test(data.mentorContact)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please enter a valid 10-digit mentor mobile number", path: ["mentorContact"] });
    }
    if (!data.mentorEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.mentorEmail)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Please enter a valid mentor email address", path: ["mentorEmail"] });
    }
  }

  // Track 3 (Robo Rugby):
  if (data.track === "roborugby") {
    if (!data.projectName || data.projectName.trim().length < 2) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Bot Name is required", path: ["projectName"] });
    }
  }
});

type FormValues = z.infer<typeof formSchema>;

const Registration = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const getInitialTrack = (): TrackType => {
    const t = searchParams.get("track")?.toLowerCase();
    if (t === "round2" || t === "round-2" || t === "r2") return "round2";
    if (t === "roborugby" || t === "robo-rugby" || t === "rugby") return "roborugby";
    return "round1";
  };

  const [activeTrack, setActiveTrack] = useState<TrackType>(getInitialTrack);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedEvent, setSelectedEvent] = useState<string>("");
  const [cityOpen, setCityOpen] = useState(false);
  const [citySearch, setCitySearch] = useState("");
  const [startTime] = useState(Date.now());

  const juniorEvents = ["Junior Future Innovators", "Junior AI Innovation Challenge"];
  const seniorEvents = ["Senior Future Innovators", "Senior AI Innovation Challenge"];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      track: getInitialTrack(),
      category: undefined,
      event: getInitialTrack() === "roborugby" ? "Robo Rugby" : "",
      uniqueTeamId: "",
      selectionProof: undefined,
      teamName: "",
      state: "",
      city: "",
      schoolName: "",
      schoolAddress: "",
      class: "",
      teamLeaderName: "",
      member1: "",
      member2: "",
      member3: "",
      studentContact: "",
      studentEmail: "",
      mentorName: "",
      mentorContact: "",
      mentorEmail: "",
      projectName: "",
      aboutProject: "",
      scalability: "",
      projectImage: undefined,
      paymentScreenshot: undefined,
      hasCurriculum: undefined,
    },
  });

  // Keep state in sync with URL
  useEffect(() => {
    const t = searchParams.get("track")?.toLowerCase();
    if (t === "round2" || t === "round-2" || t === "r2") {
      setActiveTrack("round2");
      form.setValue("track", "round2");
    } else if (t === "roborugby" || t === "robo-rugby" || t === "rugby") {
      setActiveTrack("roborugby");
      form.setValue("track", "roborugby");
      form.setValue("event", "Robo Rugby");
      setSelectedEvent("Robo Rugby");
    } else {
      setActiveTrack("round1");
      form.setValue("track", "round1");
    }
  }, [searchParams, form]);

  const switchTrack = (newTrack: TrackType) => {
    setActiveTrack(newTrack);
    setSearchParams({ track: newTrack });
    form.setValue("track", newTrack);
    form.clearErrors();

    if (newTrack === "roborugby") {
      form.setValue("category", "Senior");
      form.setValue("event", "Robo Rugby");
      setSelectedEvent("Robo Rugby");
      setSelectedCategory("Senior");
    } else {
      form.setValue("event", "");
      setSelectedEvent("");
      form.setValue("category", undefined);
      setSelectedCategory("");
    }
  };

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    try {
      const completionTime = Math.floor((Date.now() - startTime) / 1000);

      // Helper function to upload file to OpnForm Vapor storage
      const uploadFileToVapor = async (file: File) => {
        const signedUrlResponse = await fetch("https://api.opnform.com/vapor/signed-storage-url", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bucket: "",
            content_type: file.type || "application/octet-stream",
            expires: "",
            visibility: "",
            baseURL: null,
            headers: {},
          }),
        });

        if (!signedUrlResponse.ok) {
          throw new Error(`Failed to get upload URL for ${file.name}`);
        }

        const signedUrlData = await signedUrlResponse.json();

        // Upload file to the signed URL
        const uploadResponse = await fetch(signedUrlData.url, {
          method: "PUT",
          headers: signedUrlData.headers,
          body: file,
        });

        if (!uploadResponse.ok) {
          throw new Error(`Failed to upload ${file.name}`);
        }

        const fileExt = file.name.split(".").pop() || "png";
        return `${signedUrlData.key.split("/").pop()}_${signedUrlData.uuid}.${fileExt}`;
      };

      // Upload payment screenshot
      const uploadedPaymentFileName = await uploadFileToVapor(values.paymentScreenshot);

      // Upload project image if provided
      let uploadedProjectImageFileName: string | null = null;
      if (values.projectImage) {
        uploadedProjectImageFileName = await uploadFileToVapor(values.projectImage);
      }

      // Upload R1 selection proof screenshot (for Round 2)
      let uploadedSelectionProofFileName: string | null = null;
      if (values.selectionProof) {
        uploadedSelectionProofFileName = await uploadFileToVapor(values.selectionProof);
      }

      const payload: Record<string, any> = {
        // Category
        "2de6b1f2-003d-4909-8855-7e9b3c1aa986": activeTrack === "roborugby" ? "Class 7-12" : (values.category || "Senior"),
        // Event
        "8d9b254a-4d1b-4b7b-ada7-d073c3d9c167": activeTrack === "roborugby" ? "Robo Rugby" : (values.event || "NIB Event"),
        // State
        "eb804168-05c4-4c4d-ad59-485783e830d7": values.state,
        // City
        "62edff5e-2685-4a58-a137-5b426ca2b3c2": values.city,
        // School Name
        "2fc256eb-05d8-49fb-bb13-2177d241d4b1": values.schoolName,
        // School Address
        "69ed9453-40a9-49d7-891e-d86b3dab7730": values.schoolAddress || "",
        // Class
        "e8612548-3d85-4e8b-b60a-f6519e513b9b": values.class,
        // Team Name
        "c3ae7c8e-24cf-4433-a01a-250a99bc48f8": values.teamName,
        // Leader Name
        "a9feba9d-3823-4dd6-9596-cdaeed841506": values.teamLeaderName,
        // Member 1
        "23f5cd57-4610-4cda-b022-932c63518273": values.member1 || "",
        // Member 2
        "2f1e21bc-e155-4af4-9521-76c6936908c6": values.member2 || "",
        // Member 3 (OpnForm property: bbb48ed2-a4bd-417d-97f4-f95d755f52d7)
        "bbb48ed2-a4bd-417d-97f4-f95d755f52d7": values.member3 || "",
        // Team Leader Contact
        "2e78a470-aad4-4df9-9797-4cc7eeabcb03": values.studentContact,
        // Team Leader Email
        "1bd78277-bed5-4a7a-a3bc-6b11bc17fb40": values.studentEmail,
        // Mentor Name
        "c580ad48-1903-4098-a464-36ef0717905a": values.mentorName || "",
        // Mentor Contact
        "3d5c1c67-6282-4f89-9c26-43790e20ccab": values.mentorContact || "",
        // Mentor Email
        "3c981ea4-ed40-4b59-8a6e-34a35eca92ef": values.mentorEmail || "",
        // Project Name
        "7bad9a93-4c7a-424b-a577-2155be0f6996": values.projectName || (activeTrack === "roborugby" ? "Robo Rugby Bot" : ""),
        // Solution (Which Problem is Your Project Solving?)
        "7acc294f-95e6-492e-9fda-478c0b116aaa": activeTrack === "round1" ? (values.aboutProject || "") : "",
        // Curriculum (only for Round 1)
        ...(activeTrack === "round1" && values.hasCurriculum
          ? { "9bf2b8f1-3ded-4df0-a7ce-393ffd3f0e64": values.hasCurriculum }
          : {}),
        // Unique Team ID (OpnForm property: 68afaaa5-ba62-4abf-af0a-0cf6db9c53a3)
        "68afaaa5-ba62-4abf-af0a-0cf6db9c53a3": values.uniqueTeamId || "",
        // Completion time
        "completion_time": completionTime,
      };

      // Payment screenshot
      if (uploadedPaymentFileName) {
        payload["ec1241a9-8ab4-4bcd-9724-97bdd8a0d8a8"] = [uploadedPaymentFileName];
      }

      // Image of project
      if (uploadedProjectImageFileName) {
        payload["6338385c-3465-49ae-893b-7e39e638eed6"] = [uploadedProjectImageFileName];
      }

      // R1 Selection Proof Screenshot (OpnForm property: 4db2fd34-9d99-4399-b6e1-15152dcb6a02)
      if (uploadedSelectionProofFileName) {
        payload["4db2fd34-9d99-4399-b6e1-15152dcb6a02"] = [uploadedSelectionProofFileName];
      }

      // Scalability (for Senior in R1)
      if (values.scalability && activeTrack === "round1") {
        payload["999cd92b-c4b5-4fe7-a6c6-f6ba8e827145"] = values.scalability;
      }

      const response = await fetch("https://api.opnform.com/forms/nib-event-form-9bty5b/answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast({
        title: "Registration Successful!",
        description: "Your registration has been submitted successfully. We'll contact you soon.",
      });

      form.reset();
      setSelectedState("");
      setSelectedCategory("");
      setCityOpen(false);
      setCitySearch("");

      navigate("/thank-you");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit registration. Please check your details and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    form.setValue("event", "");
    setSelectedEvent("");
    if (value !== "Senior") {
      form.setValue("scalability", "");
      form.clearErrors("scalability");
    }
  };

  const handleStateChange = (value: string) => {
    setSelectedState(value);
    form.setValue("city", "");
    setCitySearch("");
  };

  const handleEventChange = (value: string) => {
    setSelectedEvent(value);
  };

  const getEventPrice = () => {
    if (activeTrack === "round1") return 100;
    return 1500;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-3 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
              Event <span className="text-gradient">Registration</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              {activeTrack === "round1" && "Register your team for Round 1 Online Idea Submission"}
              {activeTrack === "round2" && "Grand Finale Registration for Shortlisted Teams (Lucknow)"}
              {activeTrack === "roborugby" && "Direct Arena Finale Entry for Robo Rugby (Combat & Goals)"}
            </p>

            {/* Badges per Track */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto px-2">
              {activeTrack === "round1" && (
                <>
                  <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold">
                    Round 1 Online Submission: Last Date 22nd Nov 2026
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs sm:text-sm font-semibold">
                    Results: 25th Nov 2026
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs sm:text-sm font-semibold">
                    Round 1 Fee: ₹100
                  </span>
                </>
              )}

              {activeTrack === "round2" && (
                <>
                  <span className="px-3 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs sm:text-sm font-bold">
                    Round 2 Grand Finale: 20th Dec 2026 (Lucknow)
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs sm:text-sm font-semibold">
                    Shortlisted Teams Only
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs sm:text-sm font-semibold">
                    Finale Fee: ₹1,500
                  </span>
                </>
              )}

              {activeTrack === "roborugby" && (
                <>
                  <span className="px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold">
                    Direct Finale Entry • No Round 1 Required
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs sm:text-sm font-semibold">
                    Grand Finale: 20th Dec 2026 (Lucknow)
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs sm:text-sm font-semibold">
                    Arena Fee: ₹1,500
                  </span>
                </>
              )}
            </div>
          </motion.div>

          {/* Track Switcher (Segmented Control) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8"
          >
            <button
              type="button"
              onClick={() => switchTrack("round1")}
              className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                activeTrack === "round1"
                  ? "border-primary bg-primary/10 shadow-lg shadow-primary/15"
                  : "border-border hover:border-primary/40 bg-card/60"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Stage 01 • Online</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary">₹100</span>
              </div>
              <div className="font-bold text-foreground text-base sm:text-lg">Round 1: Online Idea</div>
              <p className="text-xs text-muted-foreground mt-1">Open for all students • Theme: Society Welfare</p>
            </button>

            <button
              type="button"
              onClick={() => switchTrack("round2")}
              className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                activeTrack === "round2"
                  ? "border-secondary bg-secondary/10 shadow-lg shadow-secondary/15"
                  : "border-border hover:border-secondary/40 bg-card/60"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">Stage 02 • Physical</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-secondary/20 text-secondary">₹1,500</span>
              </div>
              <div className="font-bold text-foreground text-base sm:text-lg">Round 2: Grand Finale</div>
              <p className="text-xs text-muted-foreground mt-1">For shortlisted finalists traveling to Lucknow</p>
            </button>

            <button
              type="button"
              onClick={() => switchTrack("roborugby")}
              className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                activeTrack === "roborugby"
                  ? "border-amber-400 bg-amber-500/10 shadow-lg shadow-amber-500/15"
                  : "border-border hover:border-amber-400/40 bg-card/60"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Direct Entry • Arena</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400">₹1,500</span>
              </div>
              <div className="font-bold text-foreground text-base sm:text-lg">Robo Rugby Combat</div>
              <p className="text-xs text-muted-foreground mt-1">Class 7–12 only • No Round 1 idea needed</p>
            </button>
          </motion.div>

          {/* Official Consent Form Showcase Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-card via-card/90 to-background border-2 border-secondary/40 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-secondary/15 text-secondary border border-secondary/30 shrink-0 shadow-inner">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-bold text-foreground text-base sm:text-lg">
                      Official Participant Consent Form 2026
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary border border-secondary/30 uppercase tracking-wide">
                      Lucknow Grand Finale
                    </span>
                    {(activeTrack === "round2" || activeTrack === "roborugby") ? (
                      <span className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-500 border border-amber-500/30 uppercase tracking-wide">
                        Mandatory
                      </span>
                    ) : (
                      <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        Finale Document
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    All student participants attending the Grand Finale in <strong className="text-foreground">Lucknow on 20th December 2026</strong> must have this consent form filled and signed by their parent/guardian and school authority. Please download, print, get it signed, and carry the physical copy to the venue on event day.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0 w-full md:w-auto">
                <a
                  href="/documents/ConsentForm2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto border-border hover:bg-muted text-xs font-semibold h-10 px-4 cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    Preview Form
                  </Button>
                </a>

                <a
                  href="/documents/ConsentForm2026.pdf"
                  download="NIB_ConsentForm_2026.pdf"
                  className="w-full sm:w-auto"
                >
                  <Button
                    type="button"
                    size="sm"
                    className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 text-xs font-bold h-10 px-4 shadow-md cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    Download PDF
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-4 sm:p-8 md:p-12 shadow-xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                {/* TRACK 2 (ROUND 2) EXCLUSIVE: Selection Verification */}
                {activeTrack === "round2" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-5 sm:p-6 rounded-2xl bg-secondary/10 border-2 border-secondary/30 space-y-4"
                  >
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-secondary" />
                      <h3 className="font-bold text-foreground text-base sm:text-lg">Round 1 Shortlist Verification</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Please enter your unique team credentials to confirm your qualification for the Lucknow Grand Finale.
                    </p>

                    <FormField
                      control={form.control}
                      name="uniqueTeamId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unique Team ID *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your Unique Team ID (e.g., NIB-2026-XXXX)" {...field} />
                          </FormControl>
                          <FormDescription className="text-xs text-muted-foreground">
                            The official Team ID issued in your Round 1 selection email / SMS.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="selectionProof"
                      render={({ field: { value, onChange, ...field } }) => (
                        <FormItem>
                          <FormLabel>R1 Selection Proof Screenshot *</FormLabel>
                          <FormControl>
                            <div className="flex flex-col gap-2">
                              <Input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) onChange(file);
                                }}
                                {...field}
                                className="cursor-pointer"
                              />
                              {value && (
                                <p className="text-sm text-muted-foreground flex items-center gap-2">
                                  <Upload className="w-4 h-4 text-secondary" />
                                  {value.name}
                                </p>
                              )}
                            </div>
                          </FormControl>
                          <FormDescription className="text-xs text-muted-foreground">
                            Upload a screenshot of the official selection email or SMS from Round 1.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Consent Form Reminder for Round 2 */}
                    <div className="pt-3 border-t border-secondary/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs bg-secondary/5 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b-2xl">
                      <div className="flex items-center gap-2 text-foreground font-medium">
                        <FileText className="w-4 h-4 text-secondary shrink-0" />
                        <span>Signed <strong>Consent Form 2026</strong> required on 20th Dec at Lucknow venue</span>
                      </div>
                      <a
                        href="/documents/ConsentForm2026.pdf"
                        download="NIB_ConsentForm_2026.pdf"
                        className="inline-flex items-center gap-1.5 text-secondary hover:underline font-bold"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download Form
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* CATEGORY & EVENT: For Round 1 & Round 2 */}
                {activeTrack !== "roborugby" ? (
                  <>
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-base">Category *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={(value) => {
                                field.onChange(value);
                                handleCategoryChange(value);
                              }}
                              value={field.value}
                              className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg"
                            >
                              <Label
                                htmlFor="junior"
                                className={`flex items-center space-x-3 p-3.5 rounded-xl border transition-all cursor-pointer font-normal ${
                                  field.value === "Junior"
                                    ? "border-primary bg-primary/10 shadow-sm"
                                    : "border-border bg-card hover:bg-muted/40"
                                }`}
                              >
                                <RadioGroupItem value="Junior" id="junior" />
                                <div className="flex flex-col">
                                  <span className="font-semibold text-foreground text-sm">Junior</span>
                                  <span className="text-xs text-muted-foreground">Class 4th to 7th</span>
                                </div>
                              </Label>
                              <Label
                                htmlFor="senior"
                                className={`flex items-center space-x-3 p-3.5 rounded-xl border transition-all cursor-pointer font-normal ${
                                  field.value === "Senior"
                                    ? "border-primary bg-primary/10 shadow-sm"
                                    : "border-border bg-card hover:bg-muted/40"
                                }`}
                              >
                                <RadioGroupItem value="Senior" id="senior" />
                                <div className="flex flex-col">
                                  <span className="font-semibold text-foreground text-sm">Senior</span>
                                  <span className="text-xs text-muted-foreground">Class 8th to 12th</span>
                                </div>
                              </Label>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {selectedCategory && (
                      <FormField
                        control={form.control}
                        name="event"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Event *</FormLabel>
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value);
                                handleEventChange(value);
                              }}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an event" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {(selectedCategory === "Junior" ? juniorEvents : seniorEvents).map((event) => (
                                  <SelectItem key={event} value={event}>
                                    {event}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </>
                ) : (
                  /* ROBO RUGBY CATEGORY BADGE & CONSENT NOTICE */
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Swords className="w-4 h-4 text-amber-400" />
                          <span className="font-bold text-foreground text-sm">Event: Robo Rugby (Combat Arena)</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Eligibility: Class 7th to 12th • Direct Grand Finale entry in Lucknow
                        </p>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 uppercase">
                        Fixed Spec
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-secondary/10 border border-secondary/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2 text-foreground font-medium">
                        <FileText className="w-4 h-4 text-secondary shrink-0" />
                        <span>All combat bot drivers must carry the signed <strong>Consent Form 2026</strong></span>
                      </div>
                      <a
                        href="/documents/ConsentForm2026.pdf"
                        download="NIB_ConsentForm_2026.pdf"
                        className="inline-flex items-center gap-1.5 text-secondary hover:underline font-bold shrink-0"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download Form
                      </a>
                    </div>
                  </div>
                )}

                {/* State Selection */}
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State *</FormLabel>
                      <Select
                        onValueChange={(value) => {
                          field.onChange(value);
                          handleStateChange(value);
                        }}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your state" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="max-h-[300px]">
                          {indianStates.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* City Selection */}
                {selectedState && (
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => {
                      const districtList = indianStatesAndCities[selectedState] || [];
                      const isCustomCity = field.value && !districtList.includes(field.value);

                      return (
                        <FormItem className="flex flex-col">
                          <FormLabel>City / District *</FormLabel>
                          <Popover open={cityOpen} onOpenChange={setCityOpen}>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  aria-expanded={cityOpen}
                                  className={`w-full justify-between font-normal ${
                                    !field.value ? "text-muted-foreground" : "text-foreground"
                                  }`}
                                >
                                  {field.value
                                    ? isCustomCity
                                      ? `${field.value} (Custom)`
                                      : field.value
                                    : "Select or search your district / city"}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
                              <Command>
                                <CommandInput
                                  placeholder="Search district or type custom city..."
                                  value={citySearch}
                                  onValueChange={setCitySearch}
                                />
                                <CommandList className="max-h-[260px] overflow-y-auto">
                                  <CommandEmpty className="p-3 text-sm text-center">
                                    <p className="text-muted-foreground mb-2">
                                      No matching district found for "{citySearch}".
                                    </p>
                                    {citySearch.trim() && (
                                      <Button
                                        type="button"
                                        size="sm"
                                        variant="secondary"
                                        className="w-full text-xs font-semibold"
                                        onClick={() => {
                                          field.onChange(citySearch.trim());
                                          setCityOpen(false);
                                        }}
                                      >
                                        Use "{citySearch.trim()}" as custom city
                                      </Button>
                                    )}
                                  </CommandEmpty>

                                  {isCustomCity && (
                                    <CommandGroup heading="Custom Selection">
                                      <CommandItem
                                        value={field.value}
                                        onSelect={() => {
                                          setCityOpen(false);
                                        }}
                                      >
                                        <Check className="mr-2 h-4 w-4 opacity-100 text-primary" />
                                        <span>{field.value} (Custom)</span>
                                      </CommandItem>
                                    </CommandGroup>
                                  )}

                                  <CommandGroup heading={`Districts in ${selectedState}`}>
                                    {districtList.map((city) => (
                                      <CommandItem
                                        key={city}
                                        value={city}
                                        onSelect={() => {
                                          field.onChange(city);
                                          setCityOpen(false);
                                        }}
                                      >
                                        <Check
                                          className={`mr-2 h-4 w-4 ${
                                            field.value === city ? "opacity-100 text-primary" : "opacity-0"
                                          }`}
                                        />
                                        <span>{city}</span>
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>

                                  {citySearch.trim() && !districtList.includes(citySearch.trim()) && (
                                    <div className="p-2 border-t border-border">
                                      <Button
                                        type="button"
                                        size="sm"
                                        variant="outline"
                                        className="w-full text-xs"
                                        onClick={() => {
                                          field.onChange(citySearch.trim());
                                          setCityOpen(false);
                                        }}
                                      >
                                        + Use "{citySearch.trim()}" as custom city
                                      </Button>
                                    </div>
                                  )}
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                          <FormDescription className="text-xs text-muted-foreground">
                            Search your district, or type your town/city name if not in the list.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                )}

                {/* School Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="schoolName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>School Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter school name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="class"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {activeTrack === "roborugby" ? "Class (7th to 12th) *" : "Class *"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={
                              activeTrack === "roborugby"
                                ? "Enter class (Class 7 to 12)"
                                : "Enter class (e.g., V, VI, VII)"
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="schoolAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>School Address *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter complete school address"
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Team Information */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Team Information</h3>
                    {activeTrack === "roborugby" && (
                      <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                        Up to 4 Members (Leader + 3 Members)
                      </span>
                    )}
                  </div>

                  <FormField
                    control={form.control}
                    name="teamName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Team Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your team name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="teamLeaderName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Team Leader Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter team leader name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className={`grid grid-cols-1 ${activeTrack === "roborugby" ? "md:grid-cols-3" : "md:grid-cols-2"} gap-4`}>
                    <FormField
                      control={form.control}
                      name="member1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Member 1 (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Member 1 name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="member2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Member 2 (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Member 2 name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Member 3 (Available for Robo Rugby / expandable) */}
                    {activeTrack === "roborugby" && (
                      <FormField
                        control={form.control}
                        name="member3"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Member 3 (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Member 3 name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                </div>

                {/* Team Leader Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Team Leader Contact Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="studentContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Leader Contact Number *</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="10-digit mobile number"
                              maxLength={10}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="studentEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Team Leader Email *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="leader@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* MENTOR INFORMATION: REQUIRED for Round 2, HIDDEN for Round 1 & Robo Rugby */}
                {activeTrack === "round2" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 pt-2 border-t border-border/50"
                  >
                    <div>
                      <h3 className="text-lg font-semibold">Mentor Information *</h3>
                      <p className="text-xs text-muted-foreground">Required for all shortlisted teams attending the Lucknow Grand Finale.</p>
                    </div>

                    <FormField
                      control={form.control}
                      name="mentorName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mentor Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter mentor name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="mentorContact"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mentor Contact Number *</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="10-digit mobile number"
                                maxLength={10}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="mentorEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mentor Email *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="mentor@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </motion.div>
                )}

                {/* PROJECT / BOT INFORMATION */}
                <div className="space-y-4 pt-2 border-t border-border/50">
                  {/* Round 1: Banner with Society Welfare Theme & Judgement Criteria */}
                  {activeTrack === "round1" && (
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold text-foreground">Round 1: Project Idea Submission</h3>
                          <span className="px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide">
                            Theme: Society Welfare
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Teams are evaluated and selected for the Lucknow finale based on this idea submission. All projects must address real-world challenges aligned with the theme <strong className="text-foreground">"Society Welfare"</strong>.
                        </p>
                      </div>

                      {/* Judgement Criteria Breakdown */}
                      <div className="p-4 rounded-xl bg-card border border-border/70 space-y-3">
                        <div className="flex items-center justify-between gap-2 border-b border-border/50 pb-2.5">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            <h4 className="text-sm font-bold text-foreground">Overall Judgement Criteria</h4>
                          </div>
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/15 text-primary">
                            Total: 100 Marks
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Your project will be evaluated by the jury across these 7 criteria throughout the competition (100 Marks):
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-background/70 border border-border/40">
                            <span className="text-foreground/90 font-medium">1. Innovation & Originality</span>
                            <span className="font-bold text-primary shrink-0 ml-2">20 Marks</span>
                          </div>
                          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-background/70 border border-border/40">
                            <span className="text-foreground/90 font-medium">2. Social Impact & Public Welfare</span>
                            <span className="font-bold text-primary shrink-0 ml-2">20 Marks</span>
                          </div>
                          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-background/70 border border-border/40">
                            <span className="text-foreground/90 font-medium">3. Problem Identification & Understanding</span>
                            <span className="font-bold text-primary shrink-0 ml-2">15 Marks</span>
                          </div>
                          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-background/70 border border-border/40">
                            <span className="text-foreground/90 font-medium">4. Practicality & Feasibility</span>
                            <span className="font-bold text-primary shrink-0 ml-2">15 Marks</span>
                          </div>
                          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-background/70 border border-border/40">
                            <span className="text-foreground/90 font-medium">5. Technical Application & Understanding</span>
                            <span className="font-bold text-primary shrink-0 ml-2">10 Marks</span>
                          </div>
                          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-background/70 border border-border/40">
                            <span className="text-foreground/90 font-medium">6. Creativity & Problem-Solving Approach</span>
                            <span className="font-bold text-primary shrink-0 ml-2">10 Marks</span>
                          </div>
                          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-background/70 border border-border/40 sm:col-span-2">
                            <span className="text-foreground/90 font-medium">7. Idea Explanation & Presentation</span>
                            <span className="font-bold text-primary shrink-0 ml-2">10 Marks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Round 2: Grand Finale Header & Judgement Criteria */}
                  {activeTrack === "round2" && (
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold">Physical Project Details for Grand Finale</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Confirm the working project you will present before national judges in Lucknow.
                        </p>
                      </div>

                      {/* Judgement Criteria Breakdown for Grand Finale */}
                      <div className="p-4 rounded-xl bg-card border border-border/70 space-y-3">
                        <div className="flex items-center justify-between gap-2 border-b border-border/50 pb-2.5">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-secondary" />
                            <h4 className="text-sm font-bold text-foreground">Grand Finale Judgement Criteria</h4>
                          </div>
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-secondary/15 text-secondary">
                            Total: 100 Marks
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Your physical working model, live demonstration, and presentation in Lucknow will be evaluated across these 7 parameters:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-background/70 border border-border/40">
                            <span className="text-foreground/90 font-medium">1. Innovation & Originality</span>
                            <span className="font-bold text-secondary shrink-0 ml-2">20 Marks</span>
                          </div>
                          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-background/70 border border-border/40">
                            <span className="text-foreground/90 font-medium">2. Social Impact & Public Welfare</span>
                            <span className="font-bold text-secondary shrink-0 ml-2">20 Marks</span>
                          </div>
                          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-background/70 border border-border/40">
                            <span className="text-foreground/90 font-medium">3. Problem Identification & Understanding</span>
                            <span className="font-bold text-secondary shrink-0 ml-2">15 Marks</span>
                          </div>
                          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-background/70 border border-border/40">
                            <span className="text-foreground/90 font-medium">4. Practicality & Feasibility</span>
                            <span className="font-bold text-secondary shrink-0 ml-2">15 Marks</span>
                          </div>
                          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-background/70 border border-border/40">
                            <span className="text-foreground/90 font-medium">5. Technical Application & Understanding</span>
                            <span className="font-bold text-secondary shrink-0 ml-2">10 Marks</span>
                          </div>
                          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-background/70 border border-border/40">
                            <span className="text-foreground/90 font-medium">6. Creativity & Problem-Solving Approach</span>
                            <span className="font-bold text-secondary shrink-0 ml-2">10 Marks</span>
                          </div>
                          <div className="flex items-center justify-between text-xs p-2.5 rounded-lg bg-background/70 border border-border/40 sm:col-span-2">
                            <span className="text-foreground/90 font-medium">7. Idea Explanation & Presentation</span>
                            <span className="font-bold text-secondary shrink-0 ml-2">10 Marks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Robo Rugby: Bot Details Header */}
                  {activeTrack === "roborugby" && (
                    <div>
                      <h3 className="text-lg font-semibold">Robo Rugby Combat Bot Details</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        Specify your bot's name for arena match schedules and referee inspection.
                      </p>
                    </div>
                  )}

                  {/* Project / Bot Name */}
                  <FormField
                    control={form.control}
                    name="projectName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {activeTrack === "roborugby" ? "Bot Name *" : "Project Name *"}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={
                              activeTrack === "roborugby"
                                ? "Enter your bot name (e.g., TitaniumCrusher)"
                                : "Enter your project name"
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Which Problem is Your Project Solving? (ROUND 1 ONLY) */}
                  {activeTrack === "round1" && (
                    <FormField
                      control={form.control}
                      name="aboutProject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Which Problem is Your Project Solving? *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe the specific problem your project addresses, your proposed innovation, and how it solves the issue. The jury will evaluate this for Round 1 shortlisting."
                              className="min-h-[130px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {/* Scalability (ROUND 1 SENIOR ONLY) */}
                  {activeTrack === "round1" && selectedCategory === "Senior" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FormField
                        control={form.control}
                        name="scalability"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How would you scale this project or bring it to market? *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Explain your plan to scale production, reach target users, or release this project into the market."
                                className="min-h-[110px]"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              Senior Category: Explain how this idea can be expanded and commercialized beyond a prototype.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}

                  {/* Image Upload */}
                  <FormField
                    control={form.control}
                    name="projectImage"
                    render={({ field: { value, onChange, ...field } }) => (
                      <FormItem>
                        <FormLabel>
                          {activeTrack === "round1" && "Project Photo or AI Visualization *"}
                          {activeTrack === "round2" && "Photo of Physical Working Prototype *"}
                          {activeTrack === "roborugby" && "Photo of Combat Bot (Optional)"}
                        </FormLabel>
                        <FormControl>
                          <div className="flex flex-col gap-2">
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) onChange(file);
                              }}
                              {...field}
                              className="cursor-pointer"
                            />
                            {value && (
                              <p className="text-sm text-muted-foreground flex items-center gap-2">
                                <Upload className="w-4 h-4 text-primary" />
                                {value.name}
                              </p>
                            )}
                          </div>
                        </FormControl>
                        <FormDescription>
                          {activeTrack === "round1" && "Upload either a photo of your working project/prototype, or an AI-generated image visualizing your project idea (Max 10MB)."}
                          {activeTrack === "round2" && "Upload an actual photograph of the physical working model/robot you will demonstrate in Lucknow."}
                          {activeTrack === "roborugby" && "Upload a photo of your combat bot or CAD design if ready (Max 10MB)."}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* PAYMENT SECTION */}
                <div className="space-y-6 border border-border rounded-xl p-6 bg-muted/30">
                  <h3 className="text-lg font-semibold">Payment Information</h3>

                  <div className="flex flex-col items-center gap-4">
                    <div className="text-center space-y-1">
                      <p className="text-2xl font-bold text-primary">
                        {activeTrack === "round1" && `Round 1 Registration Fee: ₹${getEventPrice()}`}
                        {activeTrack === "round2" && `Round 2 Grand Finale Fee: ₹${getEventPrice()}`}
                        {activeTrack === "roborugby" && `Robo Rugby Direct Finale Fee: ₹${getEventPrice()}`}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {activeTrack === "round1" && "(Online Idea Submission Fee: ₹100 per team)"}
                        {activeTrack === "round2" && "(Physical Grand Finale Fee for shortlisted teams: ₹1,500)"}
                        {activeTrack === "roborugby" && "(Direct Entry Fee for Lucknow Combat Arena: ₹1,500)"}
                      </p>

                      <p className="text-sm text-muted-foreground pt-1">
                        Scan the QR code below to make payment of ₹{getEventPrice()}
                      </p>
                    </div>

                    <div className="bg-background p-4 rounded-lg border border-border">
                      <img
                        src={paymentQR}
                        alt="Payment QR Code"
                        className="w-64 h-auto mx-auto"
                      />
                    </div>

                    <p className="text-sm text-center text-muted-foreground max-w-md">
                      After making the payment, please upload the payment screenshot below
                    </p>
                  </div>

                  <FormField
                    control={form.control}
                    name="paymentScreenshot"
                    render={({ field: { value, onChange, ...field } }) => (
                      <FormItem>
                        <FormLabel>Payment Screenshot *</FormLabel>
                        <FormControl>
                          <div className="flex flex-col gap-2">
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) onChange(file);
                              }}
                              {...field}
                              className="cursor-pointer"
                            />
                            {value && (
                              <p className="text-sm text-muted-foreground flex items-center gap-2">
                                <Upload className="w-4 h-4 text-primary" />
                                {value.name}
                              </p>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Curriculum Question (Round 1 Only) */}
                {activeTrack === "round1" && (
                  <FormField
                    control={form.control}
                    name="hasCurriculum"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">
                          Do you have robotics, coding, and AI curriculum at your school? *
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="Yes" id="yes" />
                              <Label htmlFor="yes">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="No" id="no" />
                              <Label htmlFor="no">No</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-base font-semibold glow-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting Registration...
                    </>
                  ) : (
                    activeTrack === "round1"
                      ? "Submit Round 1 Registration (₹100)"
                      : activeTrack === "round2"
                      ? "Confirm Grand Finale Registration (₹1,500)"
                      : "Register for Robo Rugby (₹1,500)"
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Registration;
