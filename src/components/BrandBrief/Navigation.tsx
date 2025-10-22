import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  onBack: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  canProceed: boolean;
}

export const Navigation = ({ onBack, onNext, isFirst, isLast, canProceed }: NavigationProps) => {
  return (
    <div className="flex justify-between items-center gap-4 mt-8">
      <Button
        variant="outline"
        onClick={onBack}
        disabled={isFirst}
        className="gap-2"
      >
        <ChevronLeft className="w-4 h-4" />
        Anterior
      </Button>
      
      <Button
        onClick={onNext}
        disabled={!canProceed}
        className="gap-2"
      >
        {isLast ? 'Ver Resumen' : 'Siguiente'}
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};
