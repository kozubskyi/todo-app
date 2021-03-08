import React from 'react';
import './LocalStorageInfo.scss'

const LocalStorageInfo = () => {
  return (
    <p className="localStorage__text">
      Для хранения данных <span className="localStorage__text active">не используется бекенд!</span> Все данные хранятся
      в локальном хранилище браузера - Local Storage.{' '}
      <span className="localStorage__text active">Не очищайте Local Storage</span> во избежание удаления всех todos.
    </p>
  );
};

export default LocalStorageInfo;
