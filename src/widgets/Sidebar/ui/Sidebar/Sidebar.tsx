import { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className = 's' }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button data-testid="sidebar-toggle" type="button" onClick={onToggle}>
        {t('toggle')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
