import type { FC } from 'react';

interface Props {
  language: string;
  onChange: (language: string) => void;
}

export const LanguageSelect: FC<Props> = ({ language, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      className="w-full rounded-md bg-[#1F2937] px-4 py-2 text-neutral-200"
      value={language}
      onChange={handleChange}
    >
      {languages
        .sort((a, b) => a.label.localeCompare(b.label))
        .map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
    </select>
  );
};

const languages = [
  
  { value: 'Playwright', label: 'Playwright' },
  { value: 'Gherkin', label: 'Gherkin' },
  { value: 'Arduino', label: 'Arduino PL' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'MicroPython', label: 'MicroPython' },
  { value: 'Lua', label: 'Lua' },
  { value: 'Roblox', label: 'Roblox' },
  { value: 'Python', label: 'Python' },
  { value: 'C++', label: 'C++' },
  { value: 'Java', label: 'Java' },
  { value: 'SQL', label: 'SQL' },
  { value: 'Bash', label: 'Bash' },
  { value: 'Powershell', label: 'Powershell' },
  { value: 'CSS', label: 'CSS' },
  { value: 'HTML', label: 'HTML' },
  { value: 'Natural Language', label: 'Natural Language' },
  
];
