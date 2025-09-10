# Modern Card Component Example

現代的なカードコンポーネントの実装例

## 実装

```jsx
import React from 'react';
import { ArrowRightIcon, HeartIcon } from '@heroicons/react/24/outline';

const ModernCard = ({ 
  image, 
  title, 
  description, 
  category, 
  date, 
  author,
  onReadMore,
  onFavorite 
}) => {
  return (
    <article className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* 画像セクション */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
        <button 
          onClick={onFavorite}
          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
          aria-label="お気に入りに追加"
        >
          <HeartIcon className="w-5 h-5 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      {/* コンテンツセクション */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <time dateTime={date}>{new Date(date).toLocaleDateString('ja-JP')}</time>
          <span>•</span>
          <span>{author}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>

        <button 
          onClick={onReadMore}
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          続きを読む
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
};

export default ModernCard;
```

## 使用例

```jsx
import ModernCard from './ModernCard';

const CardGrid = () => {
  const articles = [
    {
      id: 1,
      image: '/images/article1.jpg',
      title: 'AIを活用したモダンWeb開発のベストプラクティス',
      description: 'Claude CodeとChatGPTを使って効率的にWebアプリケーションを開発する方法を詳しく解説します。',
      category: 'テクノロジー',
      date: '2024-01-15',
      author: 'Ezark213'
    },
    // ... more articles
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {articles.map(article => (
        <ModernCard
          key={article.id}
          {...article}
          onReadMore={() => console.log('Read more:', article.id)}
          onFavorite={() => console.log('Favorite:', article.id)}
        />
      ))}
    </div>
  );
};
```

## カスタマイズ可能な要素

1. **カラーテーマ**: `bg-blue-600`, `text-blue-600` を変更
2. **アニメーション**: `transition-*`, `duration-*` クラスを調整
3. **レイアウト**: グリッドサイズ、間隔を変更
4. **コンテンツ**: 画像サイズ、テキストの行数制限

## アクセシビリティ対応

- `aria-label` でボタンの意味を明確化
- `dateTime` 属性で日付を構造化
- キーボードナビゲーション対応
- 適切なセマンティックHTML使用

## レスポンシブ対応

- モバイル: 1列表示
- タブレット: 2列表示  
- デスクトップ: 3列表示
- 画像の適切なアスペクト比維持