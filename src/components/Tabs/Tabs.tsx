import type { LucideIcon } from "lucide-react";
import { icons } from "lucide-react";
import type { LucideIconName } from "../../data";
import "./Tabs.css";

export interface TabItem {
  id: string;
  label: string;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTabId: string;
  onTabChange: (id: string) => void;
  /** Ícono de lucide mostrado junto a cada label (ej. "Star"). */
  icon?: LucideIconName;
}

const iconMap = icons as Record<string, LucideIcon | undefined>;

export const Tabs = ({ tabs, activeTabId, onTabChange, icon }: TabsProps) => {
  const IconComponent = icon ? iconMap[icon] : undefined;

  return (
    <div className="tabs" role="tablist">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <button
            key={tab.id}
            className={`tabs__tab ${isActive ? "tabs__tab--active" : ""}`.trim()}
            role="tab"
            type="button"
            id={`tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`tabpanel-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onTabChange(tab.id)}
          >
            {IconComponent && (
              <IconComponent className="tabs__icon" aria-hidden="true" />
            )}
            <span className="tabs__label">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
