import React, { CSSProperties, FC } from 'react';

type Props = {
  imageUrl: string,
  title: string,
  onClick: () => void,
};

const styles: {[key: string]: CSSProperties} = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    width: '19%',
    margin: 4,
    marginTop: 8,
  },
  coverImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
  },
  coverTitle: {
    // overflowX: 'scroll',
  },
};

const CoverCard: FC<Props> = ({ imageUrl, title, onClick }) => (
  <div style={styles.container} onClick={onClick}>
    <img style={styles.coverImage} src={imageUrl}></img>
    <div style={styles.coverTitle}>{title}</div>
  </div>
);

export default CoverCard;
