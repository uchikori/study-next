import { useCallback, useState } from 'react'

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);

  // useCallbackは第二引数が空配列の場合、再生成しない
  const handleClick = useCallback((event) => {
    console.log(count);
    if (count < 10) {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }
  }, [count]);

  const toggleShow = useCallback((event) => {
    setIsShow((prevIsShow) => {
      return !prevIsShow
    });
  }, [isShow]);

  return { count, isShow, handleClick, toggleShow };
}