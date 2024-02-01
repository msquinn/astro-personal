import { CrumpledPaperIcon } from "@radix-ui/react-icons";
import { useSpring, animated } from "@react-spring/web";

type Props = {};

const AnimatedPaper = (props: Props) => {
    const [style, animate] = useSpring(() => ({
        from: {
            x:0
        }
    }));
  return (
    <animated.a className="flex group rounded-lg p-1" href="/blog">
      <CrumpledPaperIcon onClick={()=>animate.start({
        from: {
          x: 0,
        },
        to: {
          x: 100,
        },
      })} className={`mx-2 ${style}`} />
      blog.
    </animated.a>
  );
};

export default AnimatedPaper;
