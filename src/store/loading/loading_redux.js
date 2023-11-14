import { createActions, createReducer } from "reduxsauce";

const { Types, Creators } = createActions(
  {
    startLoading: ["section", "loadingMessage"],
    stopLoading: ["section"]
  },
  {
    prefix: "@@DEMO-LOADING/"
  }
);

export const LoadingActions = Creators;

export const LOADING_INITIAL_STATE = {};

const getSections = (state, sections) => {
  const { loadingIndicators } = state;

  return sections.reduce((obj, section) => {
    if (!section) return obj;

    const isLoading = !!(
      loadingIndicators[section] && loadingIndicators[section].loading
    );
    return {
      ...obj,
      [section]: isLoading
    };
  }, {});
};

export const loadingSelectors = {
  getIndicatorsBySection: getSections,
  getIndicatorForSection: (state, section) =>
    getSections(state, [section])[section]
};

const startLoading = (
  state,
  { section, loadingMessage = "Please wait, Loading...!" }
) => {
  return {
    ...state,
    [section]: {
      loading: true,
      loadingMessage
    }
  };
};

const stopLoading = (state, { section }) => {
  return {
    ...state,
    [section]: {
      loading: false,
      loadingMessage: null
    }
  };
};

export const loadingReducer = createReducer(LOADING_INITIAL_STATE, {
  [Types.START_LOADING]: startLoading,
  [Types.STOP_LOADING]: stopLoading
});
