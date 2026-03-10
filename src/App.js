import { useState } from "react";

const slides = [
  {
    id: 1,
    type: "title",
    title: "NIOSH Application Modernization Initiative",
    subtitle: "Replacing 6 Legacy MPN Applications with CDC Enterprise Tools",
    meta: "Data & Analytics Team  |  Project Plan  |  March 2026",
  },
  {
    id: 3,
    type: "overview",
    title: "Project Overview & Objectives",
    objective:
      "Replace 6 legacy NIOSH MPN applications with approved CDC Enterprise Tools — quickly, with minimal disruption to scientific research operations.",
    points: [
      {
        icon: "🎯",
        label: "Goal",
        text: "Decommission 6 MPN apps and migrate functionality to CDC enterprise-approved platforms.",
      },
      {
        icon: "⚡",
        label: "Speed",
        text: "Begin with initial app reviews and move fast; avoid over-engineering discovery.",
      },
      {
        icon: "🤝",
        label: "Collaboration",
        text: "Partner with DLOs to validate app selections, priorities, and requirements.",
      },
      {
        icon: "🏛️",
        label: "Compliance",
        text: "Ensure replacements meet CDC security, accessibility, and data governance standards.",
      },
    ],
  },
  {
    id: 4,
    type: "principles",
    title: "Guiding Principles",
    principles: [
      {
        num: "01",
        title: "Enterprise First",
        desc: "Default to CDC Enterprise Catalog tools before considering custom builds.",
      },
      {
        num: "02",
        title: "DLO as Partners",
        desc: "Science teams own their requirements and priorities. We facilitate and advise.",
      },
      {
        num: "03",
        title: "Risk-Based Prioritization",
        desc: "Tackle highest-risk or highest-impact apps first.",
      },
    ],
  },
  {
    id: 5,
    type: "step",
    stepNum: "Step 1",
    stepColor: "#1a6fad",
    title: "MPN App Discovery & Candidate Identification",
    desc: "Review the full list of MPN applications and identify the best replacement candidates using available information.",
    actions: [
      "Review available information from our existing application asset inventory: app overview, purpose, owner, technology stack.",
      "Cross-reference each app against the CDC Enterprise System Catalog (ESC) and begin mapping each candidate to a potential enterprise tool replacement.",
      "Flag apps with obvious enterprise equivalents (e.g., SharePoint, PowerBI, Salesforce, Teams).",
      "Review each app's complexity, user impact, data sensitivity, and feasibility of replacement with an enterprise tool.",
      "Produce an initial shortlist of candidates for DLO validation.",
    ],
    output: "📄 Output: Draft Candidate App Replacement Matrix",
  },
  {
    id: 6,
    type: "step",
    stepNum: "Step 2",
    stepColor: "#2e7d32",
    title: "DLO Stakeholder Engagement",
    desc: "Meet with each DLO group owning 1 or more of the 6 selected apps to validate our candidate list, understand their priorities, and align on which apps should be replaced first.",
    actions: [
      "Schedule individual DLO meetings (30–60 min per).",
      "Present the candidate list with our rationale — invite feedback and additions.",
      "Ask DLOs to rank replacement priority from their perspective.",
      "Compare DLO priorities against our technical/risk-based assessment.",
      "Identify any apps we missed that DLOs believe should be included.",
      "Document pain points, workarounds, and critical use cases per app.",
      "Reach consensus on the final 6 apps to be replaced.",
    ],
    output: "📄 Output: DLO-Validated Priority App List",
  },
  {
    id: 7,
    type: "step",
    stepNum: "Step 3",
    stepColor: "#6a1b9a",
    title: "Finalize List & Requirements Gathering",
    desc: "Lock in the final 6 applications and collect any specific requirements from DLOs before proceeding to reassessing enterprise tool mapping and implementation.",
    actions: [
      "Formally confirm the final list of 6 apps with DLO sign-off.",
      "Conduct brief follow-up sessions for complex or high-impact applications.",
      "Identify must-have vs. nice-to-have features for each replacement.",
      "Note any regulatory, security, or data handling constraints.",
      "Validate and refine the initial enterprise tool mappings made during Step 1 against finalized requirements — flag any gaps.",
    ],
    output: "📄 Output: Finalized App List + Requirements Summary per App",
  },
  {
    id: 8,
    type: "questions",
    title: "DLO Discovery Questions",
    subtitle: "Ask these during Step 2 stakeholder meetings",
    categories: [
      {
        cat: "🔍 App Understanding",
        qs: [
          "What is the primary purpose of this application?",
          "Who are the main users — internal staff, external partners, or the public?",
          "What problem would go unsolved if this app disappeared tomorrow?",
          "What business logic, calculations, or rules are built into the app (e.g., workflows, validations, automated decisions)?",
        ],
      },
      {
        cat: "⚠️ Risk & Priority",
        qs: [
          "What is the impact of downtime or a gap in this service?",
          "Is this app tied to any regulatory reporting or compliance requirements?",
          "Are there upcoming deadlines or events that depend on this app?",
          "How urgent is a replacement?",
        ],
      },
      {
        cat: "🔗 Data & Integrations",
        qs: [
          "What data does this app store, process, or transmit?",
          "Does it connect to other systems, databases, or APIs?",
          "Are there data sensitivity or PII concerns we should know about?",
        ],
      },
      {
        cat: "✅ Requirements & Constraints",
        qs: [
          "Is there any existing documentation on requirements?",
          "What are the top 3 features this replacement MUST have?",
        ],
      },
    ],
  },
  {
    id: 13,
    type: "candidates",
    title: "Initial Candidates List",
    candidates: [
      {
        app: "ISIS",
        DLO: "DFSE",
        toolset: "SharePoint",
      },
      {
        app: "IDMS",
        DLO: "DFSE",
        toolset: "SharePoint",
      },
      {
        app: "NSPD",
        DLO: "DSI",
        toolset: "SharePoint Library",
      },
      {
        app: "WISARDS (in progress)",
        DLO: "DSR",
        toolset: "Power BI",
      },
      {
        app: "ELFF",
        DLO: "DSR",
        toolset: "Power BI",
      },
      {
        app: "SOP",
        DLO: "HELD",
        toolset: "SharePoint Document Library",
      },
      {
        app: "Forms",
        DLO: "HELD",
        toolset: "SharePoint Document Library",
      },
      {
        app: "BRL",
        DLO: "RHD",
        toolset: "Power BI",
      },
      {
        app: "CMP",
        DLO: "RHD",
        toolset: "Power BI",
      },
    ],
  },
  {
    id: 14,
    type: "metrics",
    title: "Success Metrics",
    metrics: [
      {
        icon: "✅",
        label: "6 of 6 Apps Replaced",
        desc: "All 6 legacy MPN apps decommissioned and replaced with CDC enterprise tools.",
      },
      {
        icon: "📅",
        label: "On-Time Delivery",
        desc: "Project completed on time.",
      },
      {
        icon: "🔐",
        label: "Zero Security Incidents",
        desc: "No data breaches or compliance violations during migration.",
      },
      {
        icon: "⏱️",
        label: "Minimal Downtime",
        desc: "Each app transition completed with <4 hours of planned downtime.",
      },
      {
        icon: "📋",
        label: "Requirements Coverage",
        desc: "≥95% of documented must-have requirements delivered.",
      },
      {
        icon: "💰",
        label: "Cost Avoidance",
        desc: "Documented savings from eliminating MPN licensing and maintenance costs.",
      },
    ],
  },
  {
    id: 15,
    type: "images",
    title: "1st App Modernization: WISARDS Fire Fighter Fatality Map",
    images: [
      {
        src: "/firefighter-fatality-california.png",
        alt: "California Fire Fighter Fatality Map - Detailed incident view",
      },
      {
        src: "/firefighter-fatality-us-filtered.png",
        alt: "US Fire Fighter Fatality Map - Filtered state view with data table",
      },
    ],
  },
  {
    id: 16,
    type: "metrics",
    title: "WISARDS Modernization Advantages",
    metrics: [
      {
        icon: "⏱️",
        label: "Turnaround Time",
        desc: "Reduced Turnaround time for enhancements from weeks to days",
      },
      {
        icon: "🧩",
        label: "Reduced complexity",
        desc: "Solution is easier to manage, update, and scale.",
      },
      {
        icon: "🏢",
        label: "No separate hosting",
        desc: "Everything runs within existing CDC cloud services..",
      },
      {
        icon: "✨",
        label: "Less Overhead",
        desc: "Less application management overhead: No code scanning, no separate ATO, etc.",
      },
      {
        icon: "🤝",
        label: "Improved Support to the Science Teams",
        desc: "Science teams can focus on analysis instead of technology.",
      },
      {
        icon: "💰",
        label: "Cost Avoidance",
        desc: "Documented savings from eliminating hosting costs.",
      },
    ],
  },
];

const SW = ({ children, bg = "white" }) => (
  <div
    style={{
      background: bg,
      borderRadius: 12,
      padding: "36px 44px",
      minHeight: 480,
      boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);

const ST = ({ children, color = "#1a3c6e" }) => (
  <h2
    style={{
      fontSize: 26,
      fontWeight: 700,
      color,
      marginBottom: 6,
      borderBottom: `3px solid ${color}`,
      paddingBottom: 8,
    }}
  >
    {children}
  </h2>
);

const Sub = ({ children }) => (
  <p style={{ color: "#555", fontSize: 14, marginBottom: 18, marginTop: 2 }}>
    {children}
  </p>
);

function TitleSlide({ s }) {
  return (
    <SW bg="linear-gradient(135deg, #1a3c6e 0%, #1a6fad 100%)">
      <div style={{ textAlign: "center", color: "white" }}>
        <div
          style={{
            fontSize: 13,
            letterSpacing: 3,
            textTransform: "uppercase",
            opacity: 0.7,
            marginBottom: 16,
          }}
        >
          Data & Analytics Team
        </div>
        <h1
          style={{
            fontSize: 34,
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 16,
          }}
        >
          {s.title}
        </h1>
        <p style={{ fontSize: 18, opacity: 0.85, marginBottom: 32 }}>
          {s.subtitle}
        </p>
        <div
          style={{
            width: 60,
            height: 3,
            background: "#90caf9",
            margin: "0 auto 24px",
          }}
        />
        <p style={{ fontSize: 13, opacity: 0.6 }}>{s.meta}</p>
      </div>
    </SW>
  );
}

function OverviewSlide({ s }) {
  return (
    <SW>
      <ST>{s.title}</ST>
      <div
        style={{
          background: "#e3f2fd",
          borderRadius: 8,
          padding: "12px 16px",
          marginBottom: 20,
          fontSize: 14,
          color: "#1a3c6e",
          fontStyle: "italic",
        }}
      >
        {s.objective}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {s.points.map((p, i) => (
          <div
            key={i}
            style={{
              background: "#f5f7fa",
              borderRadius: 8,
              padding: "14px 16px",
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: 22 }}>{p.icon}</span>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#1a3c6e",
                  marginBottom: 2,
                }}
              >
                {p.label}
              </div>
              <div style={{ fontSize: 13, color: "#444" }}>{p.text}</div>
            </div>
          </div>
        ))}
      </div>
    </SW>
  );
}

function PrinciplesSlide({ s }) {
  return (
    <SW>
      <ST>{s.title}</ST>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 14,
          marginTop: 14,
        }}
      >
        {s.principles.map((p, i) => (
          <div
            key={i}
            style={{
              background: "linear-gradient(135deg, #1a3c6e, #1a6fad)",
              borderRadius: 10,
              padding: "18px 16px",
              color: "white",
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 800,
                opacity: 0.3,
                lineHeight: 1,
              }}
            >
              {p.num}
            </div>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>
              {p.title}
            </div>
            <div style={{ fontSize: 12, opacity: 0.85 }}>{p.desc}</div>
          </div>
        ))}
      </div>
    </SW>
  );
}

function StepSlide({ s }) {
  return (
    <SW>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 10,
        }}
      >
        <div
          style={{
            background: s.stepColor,
            color: "white",
            borderRadius: 8,
            padding: "6px 14px",
            fontWeight: 800,
            fontSize: 14,
          }}
        >
          {s.stepNum}
        </div>
        <h2
          style={{ fontSize: 22, fontWeight: 700, color: "#1a3c6e", margin: 0 }}
        >
          {s.title}
        </h2>
      </div>
      <p
        style={{
          fontSize: 14,
          color: "#555",
          marginBottom: 16,
          fontStyle: "italic",
        }}
      >
        {s.desc}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
          marginBottom: 16,
        }}
      >
        {s.actions.map((a, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 8,
              alignItems: "flex-start",
              background: "#f5f7fa",
              borderRadius: 6,
              padding: "10px 12px",
            }}
          >
            <span
              style={{
                color: s.stepColor,
                fontWeight: 700,
                fontSize: 13,
                flexShrink: 0,
              }}
            >
              →
            </span>
            <span style={{ fontSize: 13, color: "#333" }}>{a}</span>
          </div>
        ))}
      </div>
      <div
        style={{
          background: s.stepColor,
          color: "white",
          borderRadius: 8,
          padding: "10px 16px",
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        {s.output}
      </div>
    </SW>
  );
}

function QuestionsSlide({ s }) {
  return (
    <SW>
      <ST>{s.title}</ST>
      <Sub>{s.subtitle}</Sub>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {s.categories.map((cat, i) => (
          <div
            key={i}
            style={{
              background: "#f5f7fa",
              borderRadius: 8,
              padding: "14px 16px",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 13,
                color: "#1a3c6e",
                marginBottom: 8,
              }}
            >
              {cat.cat}
            </div>
            {cat.qs.map((q, j) => (
              <div
                key={j}
                style={{
                  fontSize: 12,
                  color: "#444",
                  marginBottom: 6,
                  paddingLeft: 10,
                  borderLeft: "2px solid #1a6fad",
                }}
              >
                {q}
              </div>
            ))}
          </div>
        ))}
      </div>
    </SW>
  );
}

function CandidatesSlide({ s }) {
  return (
    <SW>
      <ST>{s.title}</ST>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 12,
          marginTop: 12,
        }}
      >
        <thead>
          <tr style={{ background: "#1a3c6e", color: "white" }}>
            {["App", "DLO", "Modernization Tool Set"].map((h) => (
              <th
                key={h}
                style={{
                  padding: "8px 12px",
                  textAlign: "left",
                  fontWeight: 700,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {s.candidates.map((r, i) => (
            <tr
              key={i}
              style={{ background: i % 2 === 0 ? "#f5f7fa" : "white" }}
            >
              <td
                style={{ padding: "8px 12px", color: "#333", fontWeight: 500 }}
              >
                {r.app}
              </td>
              <td style={{ padding: "8px 12px" }}>
                <span
                  style={{
                    background: "#c62828",
                    color: "white",
                    borderRadius: 4,
                    padding: "2px 8px",
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  {r.DLO}
                </span>
              </td>
              <td style={{ padding: "8px 12px", color: "#555" }}>
                {r.toolset}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SW>
  );
}

function MetricsSlide({ s }) {
  return (
    <SW>
      <ST>{s.title}</ST>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          marginTop: 14,
        }}
      >
        {s.metrics.map((m, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              background: "#f0f4ff",
              borderRadius: 8,
              padding: "14px 16px",
            }}
          >
            <span style={{ fontSize: 28 }}>{m.icon}</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#1a3c6e" }}>
                {m.label}
              </div>
              <div style={{ fontSize: 12, color: "#555" }}>{m.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </SW>
  );
}

function ImagesSlide({ s }) {
  return (
    <SW>
      <ST>{s.title}</ST>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginTop: 16,
          // Optional: ensure the grid has height to push to bottom.
          // If SW already gives full height, you can remove this.
          // height: "100%",
          // minHeight: "60vh",
          alignItems: "stretch",
        }}
      >
        {s.images.map((img, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              // Make each column fill the grid cell so the "auto" margin can push to bottom
              height: "100%",
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: 8,
                marginBottom: 16,
              }}
            />

            {/* Info box */}
            <div
              style={{
                background: "#f5f7fa",
                borderRadius: 8,
                padding: "14px 16px",
                border: `2px solid ${i === 0 ? "#c62828" : "#2e7d32"}`,
                // Push this box to the bottom of the column
                marginTop: "auto",
              }}
            >
              {i === 0 ? (
                <>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 13,
                      color: "#c62828",
                      marginBottom: 8,
                    }}
                  >
                    Current App Technology
                  </div>
                  <div style={{ fontSize: 12, color: "#333", lineHeight: 1.5 }}>
                    <p style={{ margin: "6px 0", fontSize: 11 }}>
                      Custom-built aspx app developed by a contractor using
                      either .NET or C# framwork. This requires an ESC record
                      and full application governance.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 13,
                      color: "#2e7d32",
                      marginBottom: 8,
                    }}
                  >
                    New Technology
                  </div>
                  <div style={{ fontSize: 12, color: "#333", lineHeight: 1.5 }}>
                    <p style={{ margin: "6px 0", fontSize: 11 }}>
                      Leveraged existing Microsoft Power BI platform to connect
                      to existing WISARDS database and create the same reporting
                      dashboard functionality in a matter of days.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </SW>
  );
}

function renderSlide(slide) {
  switch (slide.type) {
    case "title":
      return <TitleSlide s={slide} />;
    case "overview":
      return <OverviewSlide s={slide} />;
    case "principles":
      return <PrinciplesSlide s={slide} />;
    case "step":
      return <StepSlide s={slide} />;
    case "questions":
      return <QuestionsSlide s={slide} />;
    case "candidates":
      return <CandidatesSlide s={slide} />;
    case "metrics":
      return <MetricsSlide s={slide} />;
    case "images":
      return <ImagesSlide s={slide} />;
    default:
      return null;
  }
}

export default function App() {
  const [cur, setCur] = useState(0);
  const total = slides.length;

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Arial, sans-serif",
        background: "#e8ecf0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px 16px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 860 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <span
            style={{
              fontSize: 12,
              color: "#888",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            NIOSH APP MODERNIZATION — PROJECT PLAN
          </span>
          <span style={{ fontSize: 12, color: "#888" }}>
            Slide {cur + 1} of {total}
          </span>
        </div>

        {renderSlide(slides[cur])}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            marginTop: 20,
          }}
        >
          <button
            onClick={() => setCur(Math.max(0, cur - 1))}
            disabled={cur === 0}
            style={{
              background: cur === 0 ? "#ccc" : "#1a3c6e",
              color: "white",
              border: "none",
              borderRadius: 6,
              padding: "8px 22px",
              fontWeight: 700,
              cursor: cur === 0 ? "default" : "pointer",
              fontSize: 14,
            }}
          >
            ← Prev
          </button>
          <div style={{ display: "flex", gap: 6 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCur(i)}
                style={{
                  width: i === cur ? 20 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === cur ? "#1a6fad" : "#bbb",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  padding: 0,
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setCur(Math.min(total - 1, cur + 1))}
            disabled={cur === total - 1}
            style={{
              background: cur === total - 1 ? "#ccc" : "#1a3c6e",
              color: "white",
              border: "none",
              borderRadius: 6,
              padding: "8px 22px",
              fontWeight: 700,
              cursor: cur === total - 1 ? "default" : "pointer",
              fontSize: 14,
            }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
