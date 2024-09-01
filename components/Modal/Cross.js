function Cross({ color = 'white', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      fill={color}
      {...props}
    >
      <path d="M14 12l5.57-5.58a1.41 1.41 0 00-2-2L12 10 6.42 4.42a1.41 1.41 0 00-2 2L10 12l-5.58 5.58a1.41 1.41 0 102 2L12 14l5.58 5.57a1.41 1.41 0 002-2z" />
    </svg>
  )
}

export default Cross
