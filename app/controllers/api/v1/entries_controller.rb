module Api
  module V1

    class EntriesController < ApplicationController
      def index
        @entries = Entry.all
        render json: @entries
      end
    end

  end
end
