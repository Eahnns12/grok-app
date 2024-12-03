import { Moon, Sun, SunMoon } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useTheme } from '@/hooks/theme-hook';

const ThemeController = () => {
  const { setTheme } = useTheme();

  return (
    <ToggleGroup type="single">
      <ToggleGroupItem
        value="light"
        aria-label="Toggle light"
        size="sm"
        onClick={() => setTheme('light')}
      >
        <Sun />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        aria-label="Toggle dark"
        size="sm"
        onClick={() => setTheme('dark')}
      >
        <Moon />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="system"
        aria-label="Toggle system"
        size="sm"
        onClick={() => setTheme('system')}
      >
        <SunMoon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export { ThemeController };
