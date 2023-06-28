interface PropsCategories {
    children: React.ReactNode;
}

export default function layout({children}: PropsCategories) {
  return (
    <div>
        {children}
    </div>
  )
}
