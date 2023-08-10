interface EmptyState {
    title?: string;
    subtitle?: string;
}


const EmptyState: React.FC<EmptyState> = () => {
  return <div>EmptyState</div>;
};

export default EmptyState;
