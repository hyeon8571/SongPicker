import React from 'react';
import GroupImage from '../../atoms/group/GroupImage';
import GroupName from '../../atoms/group/GroupName';
import GroupMemberCount from '../../atoms/group/GroupMemberCount';
import MenuIconButton from '../../atoms/group/MenuIconButton';
import GroupMenu from './GroupMenu';

interface GroupCardProps {
  teamId: number;
  teamImage: string | null;
  teamName: string;
  teamMemberCount: number;
  openMenuId: number | null;
  onMenuToggle: (e: React.MouseEvent | null, teamId: number) => void;
  onGroupClick: () => void;
  onAddMemberClick: (e: React.MouseEvent) => void;
  onEditClick: (e: React.MouseEvent) => void;
  onGroupLeft: (teamId: number) => void;
  isOpen: boolean;
}

const GroupCard = ({
  teamId,
  teamImage,
  teamName,
  teamMemberCount,
  openMenuId,
  onMenuToggle,
  onGroupClick,
  onAddMemberClick,
  onEditClick,
  onGroupLeft,
  isOpen,
}: GroupCardProps) => (
  <div
    className="bg-gray-800 rounded-lg p-3 cursor-pointer relative flex flex-col justify-between"
    onClick={() => {
      if (!isOpen) {
        onGroupClick();
      }
    }}
  >
    <div className="absolute top-2 right-2">
      <MenuIconButton onClick={e => onMenuToggle(e, teamId)} />
      {isOpen && openMenuId === teamId && (
        <GroupMenu
          teamId={teamId}
          onClose={() => onMenuToggle(null, teamId)} // 이벤트 객체 없이 null 전달
          onAddMemberClick={e => {
            e.stopPropagation(); // 클릭 이벤트 상위 전파 방지
            onAddMemberClick(e);
          }}
          onEditClick={e => {
            e.stopPropagation(); // 클릭 이벤트 상위 전파 방지
            onEditClick(e);
          }}
          onGroupLeft={() => {
            onGroupLeft(teamId); // teamId만 넘겨 처리
          }}
        />
      )}
    </div>
    <div className="flex flex-col flex-grow">
      <div className="flex justify-center w-full h-full">
        <GroupImage src={teamImage} alt={teamName} />
      </div>
      <GroupName name={teamName} />
      <GroupMemberCount count={teamMemberCount} />
    </div>
  </div>
);

export default GroupCard;