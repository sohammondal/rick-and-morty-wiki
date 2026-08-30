export type FriendlyError = {
  title: string
  description: string
}

export const getFriendlyErrorMessage = (error: string | null): FriendlyError => {
  if (error?.includes('429')) {
    return {
      title: 'The Rick and Morty API is a little overwhelmed',
      description:
        "It's rate-limiting requests right now. We already tried retrying a few times automatically - wait a moment and hit retry.",
    }
  }

  if (
    error?.toLowerCase().includes('failed to fetch') ||
    error?.toLowerCase().includes('network')
  ) {
    return {
      title: "Couldn't reach the Rick and Morty API",
      description:
        'This can happen with a flaky connection or if the API is briefly down. Check your connection and try again.',
    }
  }

  return {
    title: 'Something went wrong loading this page',
    description: error || 'An unexpected error occurred. Please try again.',
  }
}
