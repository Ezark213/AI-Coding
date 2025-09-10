# コンポーネントガイド

## ボタン
### 基本仕様
- サイズ: sm (32px), md (40px), lg (48px)
- バリアント: primary, secondary, danger, ghost
- 状態: default, hover, pressed, disabled

### 実装例
```tsx
<Button 
  size="md" 
  variant="primary"
  disabled={false}
  icon={<Icon name="save" />}
>
  保存
</Button>
```

## フォーム入力
### 基本仕様
- ラベルは上配置必須
- エラーメッセージは下配置
- プレースホルダは補助情報のみ

### 実装例
```tsx
<FormField>
  <Label>メールアドレス</Label>
  <Input 
    type="email"
    placeholder="例: user@example.com"
    error={errors.email}
  />
  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
</FormField>
```

## テーブル
### 基本仕様
- 行hover背景必須
- ソート機能一貫性
- 罫線より余白で区切る

### 実装例
```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead sortable>名前</TableHead>
      <TableHead>役職</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>田中太郎</TableCell>
      <TableCell>エンジニア</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## カード
### 基本仕様
- 角丸: 12-16px
- 影: sm または md
- パディング: 16-24px

### 実装例
```tsx
<Card>
  <CardHeader>
    <CardTitle>タイトル</CardTitle>
  </CardHeader>
  <CardContent>
    <p>カードの内容</p>
  </CardContent>
  <CardFooter>
    <Button variant="primary">アクション</Button>
  </CardFooter>
</Card>
```

## モーダル
### 基本仕様
- 最大幅: 640px
- 背景オーバーレイ: rgba(0,0,0,0.5)
- 閉じる手段: ✕ボタン + Escキー + 背景クリック

### 実装例
```tsx
<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>
      <ModalTitle>確認</ModalTitle>
      <ModalCloseButton />
    </ModalHeader>
    <ModalBody>
      <p>本当に削除しますか？</p>
    </ModalBody>
    <ModalFooter>
      <Button variant="danger">削除</Button>
      <Button variant="secondary" onClick={onClose}>キャンセル</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

## ナビゲーション
### サイドバーナビ
- トップレベル項目は最大7個
- アイコン + ラベル必須
- アクティブ状態の視覚的区別

### 実装例
```tsx
<Sidebar>
  <SidebarNav>
    <SidebarNavItem active icon={<DashboardIcon />}>
      ダッシュボード
    </SidebarNavItem>
    <SidebarNavItem icon={<ProjectsIcon />}>
      プロジェクト
    </SidebarNavItem>
    <SidebarNavItem icon={<SettingsIcon />}>
      設定
    </SidebarNavItem>
  </SidebarNav>
</Sidebar>
```