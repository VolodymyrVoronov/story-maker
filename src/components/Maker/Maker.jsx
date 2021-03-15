import React from "react";
import { useDispatch, useSelector } from "react-redux";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import {
  setZIndexForGraphicFrameAC,
  setZIndexForTextFrameAC,
  clearCanvasAC,
} from "./../../redux/actions/actions";

import ImageBlock from "./../ImageBlock/ImageBlock";
import TextBlock from "./../TextBlock/TextBlock";
import Button from "../UI/Button/Button";
import CanvasColorControl from "./../CanvasColorControl/CanvasColorControl";
import GraphicPanel from "./../GraphicPanel/GraphicPanel";
import SpeechBubblePanel from "./../SpeechBubblePanel/SpeechBubblePanel";

import {
  MakerContainer,
  MakerControls,
  MakerControlsButtons,
  MakerBody,
} from "./Maker.styled";

const Maker = () => {
  const dispatch = useDispatch();
  const {
    isStartButtonClick,
    canvasColor,
    graphicFrames,
    speechBubbles,
  } = useSelector(({ app }) => app);

  const ref = React.useRef();

  const onGetStoryClick = () => {
    const input = ref.current;
    html2canvas(input, { allowTaint: true, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 1.5, 0);
      pdf.save("download.pdf");
    });
  };

  const onClearCnavasClick = (params) => {
    dispatch(clearCanvasAC());
  };

  const onImageBlockClick = (id) => {
    dispatch(setZIndexForGraphicFrameAC(id));
  };

  const onImageTextClick = (id) => {
    dispatch(setZIndexForTextFrameAC(id));
  };

  return (
    <MakerContainer>
      <MakerControls>
        <MakerControlsButtons>
          <Button onClick={onGetStoryClick}>Save in PDF</Button>&nbsp;
          <Button onClick={onClearCnavasClick}>Clear canvas</Button>
        </MakerControlsButtons>
        <CanvasColorControl />
        <GraphicPanel />
        <SpeechBubblePanel />
      </MakerControls>

      <MakerBody
        startButtonWasClicked={isStartButtonClick}
        ref={ref}
        canvasColor={
          canvasColor.color !== undefined ? canvasColor.color : canvasColor
        }
        {...{
          backgroundcolor: `${canvasColor.color}`,
          width: "210mm",
          height: "297mm",
          marginleft: 0,
          marginright: 0,
        }}
      >
        {graphicFrames.map((frame) => {
          const {
            id,
            borderColor,
            borderRadius,
            borderWidth,
            bgImage,
            zIndex,
          } = frame;

          return (
            <ImageBlock
              key={id}
              id={id}
              borderColor={borderColor}
              borderRadius={borderRadius}
              borderWidth={borderWidth}
              bgImage={bgImage}
              zIndex={zIndex}
              onImageBlockClick={onImageBlockClick}
            />
          );
        })}

        {speechBubbles.map((bubble) => {
          const { id, textBody, bgImage, zIndex } = bubble;
          return (
            <TextBlock
              key={id}
              id={id}
              textBody={textBody}
              bgImage={bgImage}
              zIndex={zIndex}
              onImageTextClick={onImageTextClick}
            />
          );
        })}
      </MakerBody>
    </MakerContainer>
  );
};

export default Maker;