import os
import openai
from dotenv import load_dotenv

load_dotenv()
# Load your API key from an environment variable or secret management service
openai.api_key = os.getenv("OPENAI")

response = openai.Image.create_edit(
  image=open("sunlit_lounge.png", "rb"),
  mask=open("mask.png", "rb"),
  prompt="A sunlit indoor lounge area with a pool containing a flamingo",
  n=1,
  size="1024x1024"
)
image_url = response['data'][0]['url']