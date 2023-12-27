
type data = { text : String, bg: string}

const Button = ({ text, bg } : data) => {
  return (
    <button
        type="button"
        className={`rounded-full ${bg} px-8 py-3 text-lg text-white shadow-sm
         focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
          border border-search font-bold`}
      >
        {text}
      </button>
  )
}

export default Button