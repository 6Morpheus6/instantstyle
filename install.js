
module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "git clone https://huggingface.co/spaces/cocktailpeanut/InstantStyle app"
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "uv pip install -r requirements.txt",
          "uv pip install hf-xet"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: "python ipadapter.py"
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
          // xformers: true
        }
      }
    },
    {
      method: "notify",
      params: {
        html: "Click the 'start' tab to get started!"
      }
    }
  ]
}
