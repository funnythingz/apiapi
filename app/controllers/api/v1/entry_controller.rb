module Api
  module V1

    class EntryController < ApplicationController
      def index
        @entries = Entry.all
        render json: @entries
      end
    end

  end
end
