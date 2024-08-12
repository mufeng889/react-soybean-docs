import { createStyles } from "antd-style";

const useStyle = createStyles(({ css }) => {

  return {
    image: css`
      position: absolute;
      right: 80px;
      top: 30px;
      height: 160px;
      @media (max-width: 1200px) {
         right:0;
     }
      @media (max-width: 960px) {
       top:60px
     }
       .image-container{
    position: relative;
       }
       .image-bg{
        position: absolute;
        width: 110%;
        height: 120%;
        top: 55%;
        left: 55%;
        filter:blur(72px);
       transform: translate(-50%, -50%);
       background-image: linear-gradient(-45deg, #bcc0ff 30%, #646cff 50%);
        border-radius: 50%;
       }
      .image-src{
        width:280px;
        height:280px;
         @media (max-width: 960px) {
        max-width:192px;
        max-height:192px;
       }
      }

    `,
  };
});
const ComponentsBlock = () => {
  const { styles } = useStyle();

  return (
    <div  className={styles.image}><div  className="image-container"><div  className="image-bg"></div><img className="VPImage image-src" src="/logo.svg" alt="SoybeanAdmin"/></div></div>
  )
}

export default ComponentsBlock
