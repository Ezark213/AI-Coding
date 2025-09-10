# React Component Template

AIコーディング用のReactコンポーネントテンプレート

## 基本構造

```jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * ComponentName - コンポーネントの説明
 * @param {Object} props - プロパティ
 * @param {string} props.title - タイトル
 * @param {Function} props.onClick - クリックハンドラ
 */
const ComponentName = ({ title, onClick, ...props }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // 初期化処理
  }, []);

  const handleAction = (event) => {
    // イベント処理
    onClick?.(event);
  };

  return (
    <div className="component-name" {...props}>
      <h2>{title}</h2>
      <button onClick={handleAction}>
        アクション
      </button>
    </div>
  );
};

ComponentName.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

ComponentName.defaultProps = {
  onClick: null
};

export default ComponentName;
```

## スタイリング (Tailwind CSS)

```jsx
const ComponentName = ({ title, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <button 
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        アクション
      </button>
    </div>
  );
};
```

## テスト例

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  it('should render with title', () => {
    render(<ComponentName title="テストタイトル" />);
    expect(screen.getByText('テストタイトル')).toBeInTheDocument();
  });

  it('should call onClick when button is clicked', () => {
    const mockOnClick = jest.fn();
    render(<ComponentName title="テスト" onClick={mockOnClick} />);
    
    fireEvent.click(screen.getByText('アクション'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
```

## 使用ガイドライン

1. **命名規則**: PascalCaseでコンポーネント名を設定
2. **PropTypes**: すべてのpropsに型定義を追加
3. **アクセシビリティ**: ARIA属性を適切に設定
4. **レスポンシブ**: モバイルファーストで実装
5. **パフォーマンス**: 不要な再レンダリングを避ける