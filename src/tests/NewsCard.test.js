import { fireEvent, render, screen } from '@testing-library/react';
import NewsCard from '../components/NewsCardComponent/NewsCard';

describe('NewsCard component', ()=>{
  test('Si muestra la información', () => {
    const mockItem = {
      objectID: '123',
      story_url: 'http://example.com',
      created_at: '2023-01-01T12:00:00Z',
      author: 'John Doe',
      story_title: 'Example Story',
      fave: false,
    };
  
    const setHitsMock = jest.fn();
  
    render(<NewsCard item={mockItem} setHits={setHitsMock} />);
  
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Example Story/i)).toBeInTheDocument();
  
    fireEvent.click(screen.getByAltText(/No Fovorite/i));
    expect(setHitsMock).toHaveBeenCalled();
  });
})
