import { ActionType } from "../actions/actionTypes";

import bubble01 from "./../../assets/bubble01.png";
import bubble02 from "./../../assets/bubble02.png";
import bubble03 from "./../../assets/bubble03.png";
import bubble04 from "./../../assets/bubble04.png";
import bubble05 from "./../../assets/bubble05.png";
import bubble06 from "./../../assets/bubble06.png";
import bubble07 from "./../../assets/bubble07.png";

const initialState = {
  isStartButtonClick: false,
  canvasColorsPalette: [
    {
      id: 1,
      color: "#6e6e6e",
    },
    {
      id: 2,
      color: "#4f4f50",
    },
    {
      id: 3,
      color: "#434444",
    },
    {
      id: 4,
      color: "#373737",
    },
    {
      id: 5,
      color: "#2e2e2e",
    },
    {
      id: 6,
      color: "#222222",
    },
    {
      id: 7,
      color: "#141414",
    },
    {
      id: 8,
      color: "#000000",
    },
    {
      id: 9,
      color: "#1e63b8",
    },
    {
      id: 10,
      color: "#325a9f",
    },
    {
      id: 11,
      color: "#2f5392",
    },
    {
      id: 12,
      color: "#2a487f",
    },
    {
      id: 13,
      color: "#013d63",
    },
    {
      id: 14,
      color: "#80ae35",
    },
    {
      id: 15,
      color: "#21a339",
    },
    {
      id: 16,
      color: "#177f2f",
    },
    {
      id: 17,
      color: "#42581a",
    },
    {
      id: 18,
      color: "#ecac43",
    },
    {
      id: 19,
      color: "#fb902d",
    },
    {
      id: 20,
      color: "#fc7b10",
    },
    {
      id: 21,
      color: "#aa4f04",
    },
    {
      id: 22,
      color: "#fe2c32",
    },
    {
      id: 23,
      color: "#cb0712",
    },
    {
      id: 24,
      color: "#a2040d",
    },
    {
      id: 25,
      color: "#790207",
    },
    {
      id: 26,
      color: "#f2f2f2",
    },
    {
      id: 27,
      color: "#ebebeb",
    },
    {
      id: 28,
      color: "#e4e3e2",
    },
    {
      id: 29,
      color: "#cdcecd",
    },
    {
      id: 30,
      color: "#bfc1c0",
    },
    {
      id: 31,
      color: "#8a8a8a",
    },
    {
      id: 32,
      color: "#e5f0f9",
    },
    {
      id: 33,
      color: "#d8e7f8",
    },
    {
      id: 34,
      color: "#b1cef0",
    },
    {
      id: 35,
      color: "#8ab6e9",
    },
    {
      id: 36,
      color: "#67a9ed",
    },
    {
      id: 37,
      color: "#e2ede4",
    },
    {
      id: 38,
      color: "#d4e8d9",
    },
    {
      id: 39,
      color: "#c0ddc5",
    },
    {
      id: 40,
      color: "#94ce9c",
    },
    {
      id: 41,
      color: "#fcefde",
    },
    {
      id: 42,
      color: "#ffebcf",
    },
    {
      id: 43,
      color: "#ffd69f",
    },
    {
      id: 44,
      color: "#fec271",
    },
    {
      id: 45,
      color: "#f7d9d9",
    },
    {
      id: 46,
      color: "#f5cccd",
    },
    {
      id: 47,
      color: "#eb999a",
    },
    {
      id: 48,
      color: "#df6668",
    },
  ],
  canvasColor: `#ffffff`,
  graphicFrames: [],
  bubbles: [
    {
      id: 1,
      bubbleType: bubble01,
    },
    {
      id: 2,
      bubbleType: bubble02,
    },
    {
      id: 3,
      bubbleType: bubble03,
    },
    {
      id: 4,
      bubbleType: bubble04,
    },
    {
      id: 5,
      bubbleType: bubble05,
    },
    {
      id: 6,
      bubbleType: bubble06,
    },
    {
      id: 7,
      bubbleType: bubble07,
    },
  ],
  speechBubbles: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ON_START_BUTTON_CLICK: {
      return {
        ...state,
        isStartButtonClick: true,
      };
    }

    case ActionType.GET_CANVAS_COLOR: {
      return {
        ...state,
        canvasColor: state.canvasColorsPalette.find((canvasColor) => {
          if (canvasColor.id === action.canvasColorId) {
            return canvasColor.color;
          }
          return ``;
        }),
      };
    }

    case ActionType.ADD_NEW_GRAPHIC_FRAME: {
      const newGraphicFrameBody = {
        id: Date.now(),
        borderColor: action.borderColor,
        borderRadius: action.borderRadius + "%",
        borderWidth: action.borderWidth + "px",
        bgImage: ``,
        zIndex: 99,
      };
      return {
        ...state,
        graphicFrames: [newGraphicFrameBody, ...state.graphicFrames],
      };
    }

    case ActionType.UPLOAD_NEW_PICTURE: {
      return {
        ...state,
        graphicFrames: state.graphicFrames.map((frame) => {
          if (frame.id === action.graphicFrameId) {
            return {
              ...frame,
              bgImage: action.bgImage,
            };
          }
          return frame;
        }),
      };
    }

    case ActionType.SET_Z_INDEX_FOR_GRAPHIC_FRAME: {
      return {
        ...state,
        graphicFrames: state.graphicFrames.map((frame) => {
          if (frame.id === action.graphicFrameId) {
            return {
              ...frame,
              zIndex: 1,
            };
          } else {
            return {
              ...frame,
              zIndex: 0,
            };
          }
        }),
      };
    }

    case ActionType.DELETE_GRAPHIC_FRAME: {
      return {
        ...state,
        graphicFrames: state.graphicFrames.filter(
          (frame) => frame.id !== action.graphicFrameId
        ),
      };
    }

    case ActionType.ADD_NEW_TEXT_FRAME: {
      const speechBubble = state.bubbles.filter(
        (bubble) => bubble.id === action.speechBubbleId
      );

      const newSpeedBubbles = {
        id: Date.now(),
        textBody: `Add new text here.`,
        bgImage: speechBubble[0].bubbleType,
        zIndex: 20,
      };
      return {
        ...state,
        speechBubbles: [newSpeedBubbles, ...state.speechBubbles],
      };
    }

    case ActionType.SET_Z_INDEX_FOR_TEXT_FRAME: {
      return {
        ...state,
        speechBubbles: state.speechBubbles.map((speedBubble) => {
          if (speedBubble.id === action.textFrameId) {
            return {
              ...speedBubble,
              zIndex: 30,
            };
          } else {
            return {
              ...speedBubble,
              zIndex: 20,
            };
          }
        }),
      };
    }

    case ActionType.DELETE_TEXT_FRAME: {
      return {
        ...state,
        speechBubbles: state.speechBubbles.filter(
          (speedBubble) => speedBubble.id !== action.textFrameId
        ),
      };
    }

    case ActionType.ADD_NEW_TEXT_BODY: {
      return {
        ...state,
        speechBubbles: state.speechBubbles.map((speedBubble) => {
          if (speedBubble.id === action.textFrameId) {
            return {
              ...speedBubble,
              textBody: action.newText,
            };
          }
          return speedBubble;
        }),
      };
    }

    case ActionType.CLEAR_CANVAS: {
      return {
        ...state,
        graphicFrames: [],
        speechBubbles: [],
        canvasColor: `#ffffff`,
      };
    }

    default:
      return state;
  }
};

export default appReducer;
