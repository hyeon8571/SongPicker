type TopSongItemProps = {
  topSongItem: {
    title: string;
    singer: string;
    coverImage: string;
    count: number;
  };
  rank: number;
  totalSingingCount: number;
};

const TopSongItem = (props: TopSongItemProps) => {
  console.log(props);
  return (
    <div className="flex w-full items-center gap-2">
      <div className="h-full w-10 text-md font-semibold text-center">
        <p>{props.rank}</p>
      </div>
      <div className="flex grow gap-3 items-center">
        <img src={props.topSongItem.coverImage} className="h-14" />
        <div className="flex flex-col w-full">
          <p>{props.topSongItem.title}</p>
          <p>{props.topSongItem.singer}</p>
          <progress
            className="progress progress-secondary w-full"
            value={props.topSongItem.count}
            max={props.totalSingingCount}
          ></progress>
        </div>
      </div>
      <div className="h-full w-10 text-md font-semibold text-center">
        <p className="">{props.topSongItem.count}회</p>
      </div>
    </div>
  );
};

export default TopSongItem;
