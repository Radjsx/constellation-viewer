import styles from '../styles/panel.module.css'

export function MainPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.mainPanel}>
      <div className={styles.panelStyling}>
        {children}
      </div>
    </div>
  );
}
