import { render, screen } from '@testing-library/react';
import NewsList from '../components/NewsListComponent/NewsList'

describe('NewsList component', () => {
  test('should render NewsList correctly', () => {
    const mockHits = [{
      objectID: '123',
      story_url: 'http://example.com',
      created_at: '2023-01-01T12:00:00Z',
      author: 'John Doe',
      story_title: 'Example Story',
      fave: false,
    },{
      objectID: '124',
      story_url: 'http://example2.com',
      created_at: '2023-01-01T12:00:00Z',
      author: 'Chris Adams',
      story_title: 'Example Story 2',
      fave: false,
    }];

    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };

    global.localStorage = localStorageMock;

    const data = { hits: mockHits, nbPages: 2 };
    jest.mock('../utils/connectionUtils.js', () => ({
      getDataForPageAndQuery: jest.fn(() => Promise.resolve(data)),
    }));

    render(<NewsList query="reactjs" view="All" />);

    expect(screen.getByText('Example Story')).toBeInTheDocument();
    expect(screen.getByText('Example Story 2')).toBeInTheDocument();
  });

});