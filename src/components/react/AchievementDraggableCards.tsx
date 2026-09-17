import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";
import "./AchievementDraggableCards.css";

type Achievement = { number: string; label: string };

export default function AchievementDraggableCards({ achievements }: { achievements: Achievement[] }) {
  return (
    <DraggableCardContainer className="achievement-drag-zone" aria-label="UKABCS achievements">
      {achievements.map((achievement, index) => (
        <div className={`achievement-drag-slot achievement-drag-slot-${index + 1}`} key={achievement.label}>
          <DraggableCardBody className="achievement-drag-card">
            <span className="achievement-drag-index">0{index + 1}</span>
            <strong>{achievement.number}</strong>
            <span>{achievement.label}</span>
            <small>Drag to explore</small>
          </DraggableCardBody>
        </div>
      ))}
    </DraggableCardContainer>
  );
}