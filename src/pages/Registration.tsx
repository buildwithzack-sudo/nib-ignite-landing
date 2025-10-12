import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { indianStates, indianStatesAndCities } from "@/data/indiaData";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  category: z.enum(["Junior", "Senior"], {
    required_error: "Please select a category",
  }),
  event: z.string().min(1, "Please select an event"),
  state: z.string().min(1, "Please select a state"),
  city: z.string().min(1, "Please select a city"),
  schoolName: z.string().min(2, "School name must be at least 2 characters").max(200, "School name must be less than 200 characters"),
  schoolAddress: z.string().min(5, "School address must be at least 5 characters").max(500, "School address must be less than 500 characters"),
  class: z.string().min(1, "Please enter the class").max(50, "Class must be less than 50 characters"),
  teamLeaderName: z.string().min(2, "Team leader name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  member1: z.string().min(2, "Member 1 name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  member2: z.string().min(2, "Member 2 name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  member3: z.string().min(2, "Member 3 name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  studentContact: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  studentEmail: z.string().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  mentorName: z.string().min(2, "Mentor name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  mentorContact: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
  mentorEmail: z.string().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  hasCurriculum: z.enum(["Yes", "No"], {
    required_error: "Please select an option",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Registration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [startTime] = useState(Date.now());

  const juniorEvents = ["Junior Future Innovators", "Race-O-Bot"];
  const seniorEvents = ["Senior Future Innovators", "Robo Rugby Championship", "Line Follower Robot"];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: undefined,
      event: "",
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
      hasCurriculum: undefined,
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const completionTime = Math.floor((Date.now() - startTime) / 1000);
      
      const payload = {
        "2de6b1f2-003d-4909-8855-7e9b3c1aa986": values.category,
        "8d9b254a-4d1b-4b7b-ada7-d073c3d9c167": values.event,
        "eb804168-05c4-4c4d-ad59-485783e830d7": values.state,
        "62edff5e-2685-4a58-a137-5b426ca2b3c2": values.city,
        "2fc256eb-05d8-49fb-bb13-2177d241d4b1": values.schoolName,
        "69ed9453-40a9-49d7-891e-d86b3dab7730": values.schoolAddress,
        "e8612548-3d85-4e8b-b60a-f6519e513b9b": values.class,
        "a9feba9d-3823-4dd6-9596-cdaeed841506": values.teamLeaderName,
        "23f5cd57-4610-4cda-b022-932c63518273": values.member1,
        "2f1e21bc-e155-4af4-9521-76c6936908c6": values.member2,
        "cf22920b-148f-4d6f-bbf9-51e089a8f884": values.member3,
        "2e78a470-aad4-4df9-9797-4cc7eeabcb03": values.studentContact,
        "1bd78277-bed5-4a7a-a3bc-6b11bc17fb40": values.studentEmail,
        "c580ad48-1903-4098-a464-36ef0717905a": values.mentorName,
        "3d5c1c67-6282-4f89-9c26-43790e20ccab": values.mentorContact,
        "3c981ea4-ed40-4b59-8a6e-34a35eca92ef": values.mentorEmail,
        "9bf2b8f1-3ded-4df0-a7ce-393ffd3f0e64": values.hasCurriculum,
        "completion_time": completionTime,
      };

      const response = await fetch("https://api.opnform.com/forms/my-form-ptgqjy/answer", {
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
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    form.setValue("event", "");
  };

  const handleStateChange = (value: string) => {
    setSelectedState(value);
    form.setValue("city", "");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Event <span className="text-gradient">Registration</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Register your team for National Innovators Battle 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Category Selection */}
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
                          className="flex gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Junior" id="junior" />
                            <Label htmlFor="junior">Junior</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="Senior" id="senior" />
                            <Label htmlFor="senior">Senior</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Event Selection */}
                {selectedCategory && (
                  <FormField
                    control={form.control}
                    name="event"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
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
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your city" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-[300px]">
                            {indianStatesAndCities[selectedState]?.map((city) => (
                              <SelectItem key={city} value={city}>
                                {city}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
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
                        <FormLabel>Class *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter class (e.g., V, VI, VII)" {...field} />
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

                {/* Team Members */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Team Members</h3>
                  
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

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="member1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Member 1 *</FormLabel>
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
                          <FormLabel>Member 2 *</FormLabel>
                          <FormControl>
                            <Input placeholder="Member 2 name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="member3"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Member 3 *</FormLabel>
                          <FormControl>
                            <Input placeholder="Member 3 name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Student Contact */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Student Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="studentContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student Contact Number *</FormLabel>
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
                          <FormLabel>Student Email *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="student@example.com" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Mentor Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Mentor Information</h3>
                  
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
                </div>

                {/* Curriculum Question */}
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

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Registration"
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
