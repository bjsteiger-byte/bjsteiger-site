import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function CaptionedVideo({ src, title, caption }) {
  return (
    <Box sx={{ display: 'inline-block', maxWidth: 1200, width: '100%' }}>
      <Box sx={{ width: '100%', aspectRatio: '16/9' }}>
        <iframe
          width="100%"
          height="100%"
          src={src}
          title={title}
          allowFullScreen
          style={{ border: 'none' }}
        />
      </Box>
      <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block', textAlign: 'left' }}>
        {caption}
      </Typography>
    </Box>
  )
}