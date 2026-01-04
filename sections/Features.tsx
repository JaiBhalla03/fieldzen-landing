"use client"; 

import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconClipboardList,
  IconChartBar,
  IconMap,
  IconTrendingUp,
  IconShield,
  IconBrain,
  IconBell,
  IconSearch,
  IconDeviceDesktop,
  IconLock,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export default function Features() {
  const features = [
    {
      title: "Daily Field Reporting",
      description: [
        "Simple daily reports, without friction",
        "Employees submit visit reports in seconds",
        "Capture doctor/client name, location, notes, and outcomes",
        "No spreadsheets, no WhatsApp chaos",
        "Benefit: Saves time and improves reporting consistency",
      ],
      icon: <IconClipboardList />,
    },
    {
      title: "Manager Dashboard",
      description: [
        "Complete visibility, at a glance",
        "See who visited whom and when",
        "Track daily, weekly, and monthly activity",
        "Identify inactive or high-performing reps instantly",
        "Benefit: No more end-of-day follow-up calls",
      ],
      icon: <IconChartBar />,
    },
    {
      title: "Team & Territory Management",
      description: [
        "Organize teams the way your business works",
        "Assign employees to regions or territories",
        "Map clients to reps",
        "Maintain structured ownership",
        "Benefit: Clear accountability, fewer overlaps",
      ],
      icon: <IconMap />,
    },
    {
      title: "Performance Analytics",
      description: [
        "Turn activity into insights",
        "Visit counts, conversion ratios, follow-ups",
        "Compare performance across reps and regions",
        "Spot trends early",
        "Benefit: Data-driven decisions instead of gut feeling",
      ],
      icon: <IconTrendingUp />,
    },
    {
      title: "Role-Based Access",
      description: [
        "Right data for the right people",
        "Admin: Full access & configuration",
        "Manager: Team-level insights",
        "Employee: Only their own reports",
        "Benefit: Secure and clutter-free experience",
      ],
      icon: <IconShield />,
    },
    {
      title: "Smart Report Summaries (AI)",
      description: [
        "Daily insights without reading every report",
        "Auto-generated summaries of daily activity",
        "Highlight key outcomes and concerns",
        "Works across teams or regions",
        "Benefit: Saves manager’s time",
      ],
      icon: <IconBrain />,
    },
    {
      title: "Follow-up Suggestions (AI)",
      description: [
        "Never miss an important follow-up",
        "AI flags reports needing follow-up",
        "Suggests priority based on activity patterns",
        "Benefit: Better consistency, fewer missed opportunities",
      ],
      icon: <IconBell />,
    },
    {
      title: "Natural Language Search (AI)",
      description: [
        "Ask questions like a human",
        "Examples: “Who didn’t submit a report today?” “Show top performers this week”",
        "Benefit: Faster answers, no filters needed",
      ],
      icon: <IconSearch />,
    },
    {
      title: "Web-Based, No App Required",
      description: [
        "Works on mobile, tablet, and desktop",
        "No Play Store / App Store dependency",
        "Benefit: Zero friction onboarding",
      ],
      icon: <IconDeviceDesktop />,
    },
    {
      title: "Secure & Scalable",
      description: [
        "Secure authentication",
        "Encrypted data",
        "Built to scale as your team grows",
        "Benefit: Enterprise-ready from day one",
      ],
      icon: <IconLock />,
    },
  ];
  return (
    <div className="flex flex-col gap-5 pt-10">
        <h1 className='text-center text-4xl md:text-5xl font-bold text-zinc-600'>
          {"Everything you need to manage field teams — in one place"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 0.3,
                delay: 0.8,
            }}
            className='text-center text-md md:text-lg text-neutral-600 w-full md:w-[80%] mx-auto'>
                From daily reports to performance insights, FieldZen helps you track, analyze, and optimize your field operations effortlessly.    
            </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
    
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string[];
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <ul className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 list-disc list-inside">
        {description.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
};
