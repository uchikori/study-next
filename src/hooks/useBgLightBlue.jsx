import { useEffect} from 'react'

export const useBgLightBlue = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    //アンマウント(コンポーネントが消滅)時の処理
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, []);
}