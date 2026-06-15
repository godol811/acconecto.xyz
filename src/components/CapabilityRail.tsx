import type { Capability, CapabilityId } from "@/content/types";

type CapabilityRailProps = {
  readonly capabilities: readonly Capability[];
  readonly activeId: CapabilityId;
  readonly onSelect: (id: CapabilityId) => void;
};

export function CapabilityRail({ capabilities, activeId, onSelect }: CapabilityRailProps) {
  return (
    <nav className="capability-rail" aria-label="Portfolio sections">
      <div className="capability-track" role="tablist" aria-orientation="horizontal">
        {capabilities.map((capability) => (
          <button
            aria-controls={`panel-${capability.id}`}
            aria-selected={activeId === capability.id}
            className="capability-tab"
            id={`tab-${capability.id}`}
            key={capability.id}
            onClick={() => onSelect(capability.id)}
            role="tab"
            type="button"
          >
            <span>{capability.label}</span>
            <small>{capability.kicker}</small>
          </button>
        ))}
      </div>
    </nav>
  );
}
