export default function SkillItem({
  name,
  percentage,
  imageSource,
  progressBarStyle,
}) {
  return (
    <div className="progressItem col-6">
      <div className="d-flex">
        <img
          className="skillImg"
          src={imageSource}
          alt="jqeury"
        />
        <div># {name}</div>
        <div className="ms-auto">{percentage}%</div>
      </div>

      <div className="progress m-2">
        <div
          className={`progress-bar progress-bar-striped progress-bar-animated ${
            progressBarStyle === 'warning' ? 'bg-warning' : 'bg-info'
          }`} // 조건에 따른 className 설정
          role="progressbar"
          aria-labelledby="labeldiv"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
