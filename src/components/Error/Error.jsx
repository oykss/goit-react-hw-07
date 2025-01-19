import css from './Error.module.css';
export default function Error() {
  return (
    <div className={css.wrap}>
      Oops! Something went wrong. Please try again later.
    </div>
  );
}
