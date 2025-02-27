import './HistoryItem.css';

const HistoryItem = props => {
  const { historyDetails, onDeleteHistory } = props;
  const { id, timeAccessed, logoUrl, title, domainUrl } = historyDetails;

  const onDeleteItem = () => {
    onDeleteHistory(id);
  };

  return (
    <li className="history">
      <p className="time-stamp">{timeAccessed}</p>
      <div className="domain-details-container">
        <div className="domain-details">
          <img src={logoUrl} alt="domain logo" className="domain-logo" /> {/* Meets requirement for domain logo */}
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          data-testid="delete" // Meets requirement for delete button test ID
          type="button"
          className="delete-button"
          onClick={onDeleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete" // Meets requirement for delete image
          />
        </button>
      </div>
    </li>
  );
};

export default HistoryItem;
