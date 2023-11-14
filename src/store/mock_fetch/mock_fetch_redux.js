import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions(
  {
    fetchMockData: null, // saga function
    fetchMockDataSuccess: ["mockData"]
  },
  {
    prefix: "@@DEMO-MOCK/"
  }
);

export const MockFetchTypes = Types;
export const MockFetchActions = Creators;

// initialize state

export const MOCK_FETCH_INITIAL_STATE = Immutable({
  mockData: null
});

// selectors

export const MockFetchSelectors = {
  getMockData: (state) => state.mock.mockData || null
};

// reducers

const fetchMockDataSuccess = (state, { mockData }) => {
  return state.merge({
    mockData: mockData
  });
};

// hookup reducers to types
export const mockFetchReducer = createReducer(MOCK_FETCH_INITIAL_STATE, {
  [Types.FETCH_MOCK_DATA_SUCCESS]: fetchMockDataSuccess
});
