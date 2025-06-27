import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  test: {
    environment: 'happy-dom',
  },
};
