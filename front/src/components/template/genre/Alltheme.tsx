import React, { useEffect, useRef } from 'react';
import ThemeTab from '../../atoms/genre/ThemeTab';
import ThemeSongList from '../../organisms/genre/ThemeSongList';
import { ThemedSongRecommendation, Song } from '../../../services/songService';

type Props = {
  themes: string[];
  selectedTheme: string;
  onThemeSelect: (theme: string) => void;
  themedSongs: ThemedSongRecommendation | null;
  isRefreshing: boolean;
  isConnected: boolean;
  onRefresh: () => void;
  onLikeToggle: (song: Song) => void;
  onReservation: (song: Song) => void;
  onShowNotification: (title: string, description: string) => void;
  onShowConnectionModal: (message: string) => void;
  onItemClick: (song: Song) => void;
};

const Alltheme = ({
  themes,
  selectedTheme,
  onThemeSelect,
  themedSongs,
  isRefreshing,
  isConnected,
  onRefresh,
  onLikeToggle,
  onReservation,
  onShowNotification,
  onShowConnectionModal,
  onItemClick,
}: Props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollContainerRef.current) {
        e.preventDefault();
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* 탭 */}
      <div className="flex-shrink-0 pb-4">
        {/* 배경색과 z-index 추가 */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 overflow-x-auto whitespace-nowrap"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {themes.map(theme => (
            <ThemeTab
              key={theme}
              genre={theme}
              isSelected={theme === selectedTheme}
              onClick={() => onThemeSelect(theme)}
            />
          ))}
        </div>
      </div>
      {/* 노래리스트 */}
      <div className="flex-grow overflow-y-auto rounded-xl overflow-hidden">
        {themedSongs && (
          <ThemeSongList
            themedSongs={themedSongs}
            isRefreshing={isRefreshing}
            isConnected={isConnected}
            onRefresh={onRefresh}
            onLikeToggle={onLikeToggle}
            onReservation={onReservation}
            onShowConnectionModal={onShowConnectionModal}
            onItemClick={onItemClick}
          />
        )}
      </div>
    </div>
  );
};

export default Alltheme;