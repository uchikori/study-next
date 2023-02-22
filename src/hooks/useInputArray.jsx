import { useCallback, useState } from 'react'

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((event) => {
    setText(event.target.value.trim());
  }, [text]);

  const handleAdd = useCallback((event) => {
    setArray((prevArray) => {

      //破壊的メソッドはNG
      // const newArray = prevArray;
      // newArray.push(1);
      if (prevArray.some((item) => item === text)) {
        alert("同じテキストが既に存在しています。");
        return prevArray;
      }
      const newArray = [...prevArray, text]
      console.log(newArray === prevArray);
      return newArray
    })
  }, [text]);

  return { text, array, handleChange, handleAdd }
}