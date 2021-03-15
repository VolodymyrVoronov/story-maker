import { makeActionCreator } from "./../../helpers/makeActionCreator";

import { ActionType } from "./actionTypes";

export const onStartButtonClickAC = makeActionCreator(
  ActionType.ON_START_BUTTON_CLICK
);

export const getCanvasColorAC = makeActionCreator(
  ActionType.GET_CANVAS_COLOR,
  `canvasColorId`
);

export const addNewGraphicFrameAC = makeActionCreator(
  ActionType.ADD_NEW_GRAPHIC_FRAME,
  `borderWidth`,
  `borderRadius`,
  `borderColor`
);

export const uploadNewPictureAC = makeActionCreator(
  ActionType.UPLOAD_NEW_PICTURE,
  `bgImage`,
  `graphicFrameId`
);

export const setZIndexForGraphicFrameAC = makeActionCreator(
  ActionType.SET_Z_INDEX_FOR_GRAPHIC_FRAME,
  `graphicFrameId`
);

export const deleteGraphicFrameAC = makeActionCreator(
  ActionType.DELETE_GRAPHIC_FRAME,
  `graphicFrameId`
);

export const addNewTextFrameAC = makeActionCreator(
  ActionType.ADD_NEW_TEXT_FRAME,
  `speechBubbleId`
);

export const deleteTextFrameAC = makeActionCreator(
  ActionType.DELETE_TEXT_FRAME,
  `textFrameId`
);

export const setZIndexForTextFrameAC = makeActionCreator(
  ActionType.SET_Z_INDEX_FOR_TEXT_FRAME,
  `textFrameId`
);

export const addNewTextBodyAC = makeActionCreator(
  ActionType.ADD_NEW_TEXT_BODY,
  `textFrameId`,
  `newText`
);

export const clearCanvasAC = makeActionCreator(ActionType.CLEAR_CANVAS);
