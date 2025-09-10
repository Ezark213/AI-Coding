import React, { useState } from 'react';
import { Button } from '@radix-ui/react-button';
import { MoonIcon, SunIcon, MenuIcon } from 'lucide-react';

export function AppShell() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Header */}
      <header className="h-14 flex items-center justify-between px-4 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="メニューを切り替え"
          >
            <MenuIcon size={20} />
          </Button>
          <h1 className="font-[var(--font-title)] text-[var(--color-text)]">
            Modern App
          </h1>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          aria-label={`${theme === 'light' ? 'ダーク' : 'ライト'}テーマに切り替え`}
        >
          {theme === 'light' ? <MoonIcon size={20} /> : <SunIcon size={20} />}
        </Button>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 bg-[var(--color-surface)] border-r border-[var(--color-border)] min-h-[calc(100vh-3.5rem)]">
            <nav className="p-4">
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#dashboard" 
                    className="flex items-center gap-3 px-3 py-2 rounded-[var(--radius-md)] hover:bg-[var(--color-bg)] transition-colors"
                  >
                    ダッシュボード
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="flex items-center gap-3 px-3 py-2 rounded-[var(--radius-md)] hover:bg-[var(--color-bg)] transition-colors"
                  >
                    プロジェクト
                  </a>
                </li>
                <li>
                  <a 
                    href="#settings" 
                    className="flex items-center gap-3 px-3 py-2 rounded-[var(--radius-md)] hover:bg-[var(--color-bg)] transition-colors"
                  >
                    設定
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[var(--font-title)] mb-6">ダッシュボード</h2>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="bg-[var(--color-surface)] p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)]"
                >
                  <h3 className="font-[var(--font-body)] text-[var(--color-text-muted)] mb-2">
                    指標 {i}
                  </h3>
                  <p className="font-[var(--font-title)] text-2xl">1,234</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button 
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-4 py-2 rounded-[var(--radius-md)]"
              >
                新規作成
              </Button>
              <Button 
                variant="outline"
                className="border border-[var(--color-border)] hover:bg-[var(--color-surface)] px-4 py-2 rounded-[var(--radius-md)]"
              >
                インポート
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppShell;